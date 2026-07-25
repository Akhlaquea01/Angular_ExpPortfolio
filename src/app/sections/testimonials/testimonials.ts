import { Component } from '@angular/core';
import { LucideQuote } from '@lucide/angular';
import { testimonials } from '../../../content/testimonials';
import { Reveal } from '../../shared/directives/reveal';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-testimonials',
  imports: [Reveal, Card, LucideQuote],
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly testimonials = testimonials;
}
