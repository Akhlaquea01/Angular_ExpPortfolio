import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {
  @Input() visibleSlides: number = 3;
  currentSlide: number = 0;


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
  }
  ngOnInit(): void {



  }
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (
      this.currentSlide <
      this.testimonials.length - this.visibleSlides
    ) {
      this.currentSlide++;
    }
  }

}
