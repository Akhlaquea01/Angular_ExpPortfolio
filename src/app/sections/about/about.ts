import { Component } from '@angular/core';
import { profile } from '../../../content/profile';
import { aboutContent } from '../../../content/about';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';

@Component({
  selector: 'app-about',
  imports: [Reveal, Badge],
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = profile;
  protected readonly aboutContent = aboutContent;
}
