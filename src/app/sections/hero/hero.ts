import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideArrowRight, LucideDownload, LucideMapPin } from '@lucide/angular';
import { experience as experienceData } from '../../../content/experience';
import { heroContent } from '../../../content/hero';
import { profile } from '../../../content/profile';
import { Magnetic } from '../../shared/directives/magnetic';
import { Reveal } from '../../shared/directives/reveal';
import { AnimatedBackground } from '../../shared/ui/animated-background';
import { Btn } from '../../shared/ui/button/btn';

function computeExperience(startIso: string): string {
  const start = new Date(startIso);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years}.${months}`;
}

@Component({
  selector: 'app-hero',
  imports: [Btn, Reveal, Magnetic, AnimatedBackground, NgOptimizedImage, LucideArrowRight, LucideDownload, LucideMapPin],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = profile;
  protected readonly content = heroContent;
  protected readonly expYears: string;

  constructor() {
    this.expYears = computeExperience(profile.experienceStartDate);
    const totalRolesCount = experienceData.reduce((sum, company) => sum + company.roles.length, 0);

    this.content.stats = this.content.stats.map(stat => {
      if (stat.dynamicValue === 'experienceYears') {
        return { ...stat, value: this.expYears };
      }
      if (stat.dynamicValue === 'totalRoles') {
        return { ...stat, value: totalRolesCount };
      }
      return stat;
    });
  }
}
