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
  repos: any = [
    {
      name: 'Merlin Agentic Platform',
      description: 'AI-driven agentic platform that automated sourcing workflows, reduced manual effort by 50%, enabled event auto-generation, implemented supplier identification and smart contract awarding (cutting sourcing cycle time by 30%), and automated email notifications to improve participation by 40%.',
      svn_url: '',
      homepage: '',
      static: true
    },
    {
      name: 'Sourcing Tool (eSourcing Platform)',
      description: 'Designed core modules like RFx templates, bid evaluations, and supplier ranking (improving procurement efficiency by 45%). Developed auction frameworks such as Japanese and line-item reverse auctions, enhancing competitive supplier participation.',
      svn_url: '',
      homepage: '',
      static: true
    }
  ];
  constructor() {
    const username = 'Akhlaquea01';
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          this.repos = [
            ...this.repos,
            ...data
          ];
        }
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
