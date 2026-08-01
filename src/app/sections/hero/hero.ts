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
  const startDate = new Date(startIso);
  const currentDate = new Date();
  const diffInMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  return (Math.floor(diffInMonths / 6) * 0.5).toFixed(1).replace('.0', '');
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
