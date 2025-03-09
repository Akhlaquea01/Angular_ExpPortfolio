import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-project',
    imports: [CommonModule],
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


  scrollLeft(): void {
    const cardGallery = (this.scrollContainerRef.nativeElement as HTMLElement);
    cardGallery.scrollBy({
      left: -200, // Adjust scroll distance as needed
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    const cardGallery = (this.scrollContainerRef.nativeElement as HTMLElement);
    cardGallery.scrollBy({
      left: 200, // Adjust scroll distance as needed
      behavior: 'smooth'
    });
  }
}
