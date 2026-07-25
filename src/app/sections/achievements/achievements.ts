import { Component } from '@angular/core';
import { LucideAward } from '@lucide/angular';
import { achievementStats, achievements } from '../../../content/achievements';
import { Counter } from '../../shared/directives/counter';
import { Reveal } from '../../shared/directives/reveal';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-achievements',
  imports: [Reveal, Counter, Card, LucideAward],
  templateUrl: './achievements.html',
})
export class Achievements {
  protected readonly stats = achievementStats;
  protected readonly achievements = achievements;
}
