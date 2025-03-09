import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  subject = "";
  body = "";
  url = `mailto:akhlaquea01@gmail.com'?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`
}
