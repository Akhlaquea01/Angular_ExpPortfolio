import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  isDropdownHidden: boolean = true;

  toggleDropdown() {
    this.isDropdownHidden = !this.isDropdownHidden;
  }

  hideDropdown() {
    this.isDropdownHidden = true;
  }
}
