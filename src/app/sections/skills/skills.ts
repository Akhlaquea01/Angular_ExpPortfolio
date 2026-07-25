import { Component } from '@angular/core';
import {
  LucideActivity,
  LucideCode,
  LucideDatabase,
  LucideGauge,
  LucideLayoutGrid,
  LucideServer,
  LucideSparkles,
  LucideWrench,
} from '@lucide/angular';
import { skillGroups } from '../../../content/skills';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-skills',
  imports: [
    Reveal,
    Badge,
    Card,
    LucideSparkles,
    LucideCode,
    LucideServer,
    LucideLayoutGrid,
    LucideDatabase,
    LucideWrench,
    LucideActivity,
    LucideGauge,
  ],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly groups = skillGroups;
}
