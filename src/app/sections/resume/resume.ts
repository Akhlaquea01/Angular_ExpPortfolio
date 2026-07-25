import { Component } from '@angular/core';
import { LucideDownload, LucideExternalLink } from '@lucide/angular';
import { Magnetic } from '../../shared/directives/magnetic';
import { Reveal } from '../../shared/directives/reveal';
import { Btn } from '../../shared/ui/button/btn';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-resume',
  imports: [Reveal, Magnetic, Btn, Card, LucideDownload, LucideExternalLink],
  templateUrl: './resume.html',
})
export class Resume {
  protected readonly resumeUrl = '/resume/Akhlaque-Ahmad-Resume.pdf';
}
