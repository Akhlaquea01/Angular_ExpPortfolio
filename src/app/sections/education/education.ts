import { Component } from '@angular/core';
import { LucideGraduationCap } from '@lucide/angular';
import { education } from '../../../content/education';
import { Reveal } from '../../shared/directives/reveal';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-education',
  imports: [Reveal, Card, LucideGraduationCap],
  templateUrl: './education.html',
})
export class Education {
  protected readonly items = education;
}
