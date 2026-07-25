import { Component } from '@angular/core';
import { LucideGraduationCap } from '@lucide/angular';
import { certifications } from '../../../content/certifications';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-certifications',
  imports: [Reveal, Card, Badge, LucideGraduationCap],
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly certifications = certifications;
}
