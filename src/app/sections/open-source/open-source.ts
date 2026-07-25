import { Component } from '@angular/core';
import { openSourceItems } from '../../../content/open-source';
import { Reveal } from '../../shared/directives/reveal';
import { Card } from '../../shared/ui/card';

// Disabled by default in sections.config.ts until content/open-source.ts has real entries.
@Component({
  selector: 'app-open-source',
  imports: [Reveal, Card],
  templateUrl: './open-source.html',
})
export class OpenSource {
  protected readonly items = openSourceItems;
}
