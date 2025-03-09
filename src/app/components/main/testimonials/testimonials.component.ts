import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@Component({
    selector: 'app-testimonials',
    imports: [CommonModule, FormsModule, CarouselModule, ButtonModule, TagModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  @ViewChild('scrollContainer')
  scrollContainerRef!: ElementRef;
  responsiveOptions: any[] | undefined;
  
  
  currentTestimonialIndex = 0;
  testimonials!: { name: string; company: string; message: string; image: string; }[];

  constructor() {
    this.testimonials = [
      {
        name: 'Aman Abdullah',
        company: "Vishveshwarya Group Of Instutations",
        message: "You're very responsible and courageous. Seen you from beginning when you make up your mind about something, nothing stands in your way. You have improved yourself drastically.",
        image: 'assets/images/testimonials/Aman.jpg'
      },
      {
        name: 'Akanksha',
        company: "Sacred Heart School",
        message: "Your ability to recall random facts at just right time is very impressive. You are working really hard will soon reach your goals.",
        image: 'assets/images/testimonials/Choti.jpg'
      },
      {
        name: 'Ashab Alam',
        company: "Sacred Heart School",
        message: "You're very punctual and hard working. You're always learning new things and try to better yourself, which is awesome.",
        image: 'assets/images/testimonials/Ashab.png'
      },
      {
        name: 'Aman Abdullah',
        company: "Vishveshwarya Group Of Instutations",
        message: "You're very responsible and courageous. Seen you from beginning when you make up your mind about something, nothing stands in your way. You have improved yourself drastically.",
        image: 'assets/images/testimonials/Aman.jpg'
      },
      {
        name: 'Akanksha',
        company: "Sacred Heart School",
        message: "Your ability to recall random facts at just right time is very impressive. You are working really hard will soon reach your goals.",
        image: 'assets/images/testimonials/Choti.jpg'
      },
      {
        name: 'Ashab Alam',
        company: "Sacred Heart School",
        message: "You're very punctual and hard working. You're always learning new things and try to better yourself, which is awesome.",
        image: 'assets/images/testimonials/Ashab.png'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
   

  
  }

  nextTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex + 1;
  }

  previousTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex - 1;
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
