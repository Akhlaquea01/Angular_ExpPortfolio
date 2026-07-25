import { Component } from '@angular/core';
import { profile } from '../../../content/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
