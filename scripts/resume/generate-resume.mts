import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-chromium';
import { PDFDocument } from 'pdf-lib';
import { buildResumeData } from './resume-data.mts';
import { renderResumeHtml } from './resume-template.mts';

const MAX_PAGES = 2;
const MIN_FILE_SIZE_BYTES = 30_000;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(scriptDir, '../../public/resume/Akhlaque-Ahmad-Resume.pdf');
const cssPath = path.resolve(scriptDir, 'resume-print.css');

async function main(): Promise<void> {
  const data = buildResumeData();
  const css = readFileSync(cssPath, 'utf-8');
  const html = renderResumeHtml(data, css);

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
  } finally {
    await browser.close();
  }

  const fileSize = statSync(outputPath).size;
  const pdfBytes = readFileSync(outputPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pageCount = pdfDoc.getPageCount();

  const problems: string[] = [];
  if (pageCount > MAX_PAGES) {
    problems.push(`resume is ${pageCount} pages, expected at most ${MAX_PAGES}`);
  }
  if (fileSize < MIN_FILE_SIZE_BYTES) {
    problems.push(`output file is only ${fileSize} bytes, suspiciously small`);
  }

  if (problems.length > 0) {
    console.error('Resume generation produced a suspect PDF:');
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exitCode = 1;
    return;
  }

  console.log('Resume PDF generated successfully.');
  console.log(`  Output: ${outputPath}`);
  console.log(`  Pages:  ${pageCount}`);
  console.log(`  Size:   ${(fileSize / 1024).toFixed(1)} KB`);
}

main().catch((error) => {
  console.error('Resume generation failed:', error);
  process.exitCode = 1;
});
