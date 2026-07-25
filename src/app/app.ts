import { NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Seo } from './core/services/seo';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { enabledSections } from './sections/sections.config';

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet, Navbar, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly sections = enabledSections;

  constructor() {
    inject(Seo).init();
  }
}
