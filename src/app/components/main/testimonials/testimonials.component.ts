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
        name: 'Yash Salvi',
        company: 'The Customization Group',
        message: "I've had the pleasure of working with Akhlaque for 2 years, and I can confidently say that he is one of the most talented and driven software developers. Akhlaque consistently demonstrates a deep understanding of specific technologies like Angular, Node.js, and JavaScript, and his ability to solve complex technical problems is truly impressive.",
        image: 'assets/images/testimonials/Yash.jpeg'
      },
      {
        name: 'Aiswarya Kumar Swain',
        company: 'Zycus',
        message: "I have had the privilege of working with Akhlaque Ahmad at Zycus, where he has been an integral part of our development team. His expertise in Angular, Node.js, and front-end technologies is truly commendable. His ability to deliver high-quality, scalable solutions while adhering to tight deadlines has consistently impressed me.",
        image: 'assets/images/testimonials/Aiswarya.jpeg'
      },
      {
        name: 'Bhakti Padawe',
        company: 'WebMD',
        message: "Akhlaque is a quick learner, has good technical skills, and is incredibly hard-working.",
        image: 'assets/images/testimonials/Bhakti.jpeg'
      },
      {
        name: 'Firoz Khan',
        company: 'Ailoitte',
        message: "I highly recommend Akhlaque Ahmad as an Angular developer. He is exceptionally skilled in Angular, consistently delivering top-notch solutions. His problem-solving abilities and collaborative nature make him a valuable team member. Akhlaque is reliable and professional, and I look forward to future collaborations. He would be a great asset to any Angular project.",
        image: 'assets/images/testimonials/Firoz.jpeg'
      },
      {
        name: 'Bhavesh Jangale',
        company: 'Jio',
        message: "One of the highly skilled persons who managed the workload in a proper manner to be close to the mentioned timeline.",
        image: 'assets/images/testimonials/Bhavesh.jpeg'
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
