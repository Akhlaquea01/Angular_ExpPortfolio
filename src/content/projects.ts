import { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  {
    name: 'iSource (Enterprise Sourcing Platform)',
    description: 'A high-scale sourcing platform with a lazy-loaded architecture, built using Angular DewDrops UI and a Node/Express BFF that aggregates multi-product APIs.',
    highlights: [
      'Built and maintained iSource DewDrops UI for events, QuickSource, approvals, admin, and BOQ workflows.',
      'Developed a Node.js BFF aggregating multi-product APIs (isource, ana-negotiation, ilogix, eproc) with Consul.',
      'Integrated Ably realtime, STOMP messaging, Highcharts analytics, and complex drag-and-drop sourcing UX.',
      'Delivered autonomous chat modules inside iSource (buyer/CP chat) collaborating across UI, BFF, and Java backends.'
    ],
    tech: ['Angular', 'DewDrops', 'Node BFF', 'Ably', 'Highcharts', 'STOMP']
  },
  {
    name: 'Merlin Assist & Merlin Agentic Platform (MAP)',
    description: 'An AI-powered assist chat PWA embedded across the enterprise, powered by a Spring Boot backend orchestrating multi-model LLMs and agentic workflows.',
    highlights: [
      'Built Merlin Assist chat PWA (React/Vite/MUI) featuring adaptive cards, OCR, and Microsoft Teams/Slack integrations.',
      'Embedded the React chat as a UMD bundle into Angular/DewDrops hosts ensuring Zone.js compatibility.',
      'Implemented shared common-chat Angular UI + BFF with AI streaming and MCP tools auto-derived from BFF routes.'
    ],
    tech: ['React 18', 'Angular', 'AI', 'MCP', 'Ably', 'MongoDB', 'Teams/Slack']
  },
  {
    name: 'Autonomous Negotiation (AI-Assisted Sourcing)',
    description: 'An autonomous negotiation module and product-pluggable chat shell spanning a buyer chat interface and supplier portal, powered by real-time messaging, streaming AI capabilities, and MCP tools.',
    highlights: [
      'Built DewDrops Angular UI for autonomous negotiation and a product-pluggable common-chat shell utilized across registries.',
      'Designed Node/Express BFF handling AI negotiation, supplier responses, AI streaming, and chat-stream delegation.',
      'Integrated Ably realtime pub/sub for live chat and exposed BFF routes as MCP tools for seamless AI agent integrations.',
      'Wired streaming AI chat with Markdown and PDF rendering, establishing shared patterns across MAP-assisted flows.'
    ],
    tech: ['Angular', 'DewDrops', 'Node/Express BFF', 'Ably', 'Streaming AI', 'MCP', 'Markdown', 'PDF']
  },
  {
    name: 'BOM / BOQ (Bill of Materials & Pricing)',
    description: 'An advanced micro-application for building and pricing Bills of Materials, featuring formula builders and robust queued import/export pipelines.',
    highlights: [
      'Built BOM AppX UI featuring a BOM builder, alternate-supplier views, and a complex mathjs-driven formula builder.',
      'Implemented BOM BFF for pricing tables, buyer/supplier responses, and iContract BOM variants.',
      'Delivered BOQ import/export BFF utilizing Excel/CSV pipelines, Redis/BullMQ job queues, and AWS SDK integrations.',
      'Built the BOQ pricing table micro-app (UI + BFF) enabling view-response pricing grids in sourcing events.'
    ],
    tech: ['Angular', 'Express BFF', 'ExcelJS', 'mathjs', 'Redis', 'BullMQ', 'AWS SDK', 'Agenda']
  }
];
