import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @ViewChild('scrollContainer')
  scrollContainerRef!: ElementRef;
  repos: any;
  constructor() {
    const username = 'Akhlaquea01';
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.repos = data;
      })
      .catch(error => console.error('Error fetching profile:', error));
  }

  scrollLeft() {
    this.scrollContainerRef.nativeElement.scrollLeft -= 600; // Adjust this value as needed
  }

  scrollRight() {
    this.scrollContainerRef.nativeElement.scrollLeft += 600; // Adjust this value as needed
  }
}
