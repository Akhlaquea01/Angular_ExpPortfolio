import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideMail, LucideMapPin, LucidePhone, LucideSend } from '@lucide/angular';
import { profile } from '../../../content/profile';
import { Magnetic } from '../../shared/directives/magnetic';
import { Reveal } from '../../shared/directives/reveal';
import { Btn } from '../../shared/ui/button/btn';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Reveal, Magnetic, Btn, Card, LucideMail, LucidePhone, LucideMapPin, LucideSend],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly profile = profile;

  protected name = '';
  protected email = '';
  protected message = '';

  sendMail(): void {
    const subject = encodeURIComponent(`Portfolio inquiry from ${this.name || 'a visitor'}`);
    const bodyLines = [this.message, '', `— ${this.name}`, this.email].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
