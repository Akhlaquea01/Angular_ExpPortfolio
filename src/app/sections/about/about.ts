import { Component } from '@angular/core';
import { profile } from '../../../content/profile';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';

@Component({
  selector: 'app-about',
  imports: [Reveal, Badge],
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = profile;
}
