import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @ViewChild('scrollContainer')
  scrollContainerRef!: ElementRef;

  constructor() { }

  scrollLeft() {
    this.scrollContainerRef.nativeElement.scrollLeft -= 600; // Adjust this value as needed
  }

  scrollRight() {
    this.scrollContainerRef.nativeElement.scrollLeft += 600; // Adjust this value as needed
  }
}
