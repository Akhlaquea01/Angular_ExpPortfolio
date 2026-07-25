import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideArrowRight, LucideDownload, LucideMapPin } from '@lucide/angular';
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
  protected readonly experience = computeExperience(profile.experienceStartDate);
}
