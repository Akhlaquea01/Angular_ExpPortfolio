import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home:string='Home';
  navBarContent: any[] = [
    {
      name: 'About',
      icon: 'bx-user',
      link: '#about',
    },
    {
      name: 'Skills',
      icon: 'bx-briefcase-alt',
      link: '#competences',
    },
    {
      name: 'CV',
      icon: 'bx-file-blank',
      link: '#cv',
    },
    {
      name: 'Portfolio',
      icon: 'bx-book-content',
      link: '#portfolio',
    },
    {
      name: 'Testimonials',
      icon: 'bxs-badge-check',
      link: '#references',
    },
    {
      name: 'Contact Me',
      icon: 'bx-envelope',
      link: '#contact',
    }
  ];
  constructor() { }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
    function(): void
    {
      $('.navbar-collapse').toggle();
    }
  );
  }

}
