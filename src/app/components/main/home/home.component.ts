import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  startDate: Date = new Date(2021, 1, 14);
  name = "Akhlaque";
  about: string;
  hobby = "Outside of the development realm, I'm an avid technology enthusiast, constantly exploring the latest advancements and innovations. I also enjoy unwinding by playing mobile games and spending quality time chilling with friends. Traveling is another passion of mine, as it allows me to explore new cultures and broaden my horizons."

  constructor() {
    this.about = this.generateAbout();
  }

  calculateExperience(): string {
    const start = this.startDate;
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}.${months}`;
  }

  generateAbout(): string {
    const experience = this.calculateExperience();
    return `Passionate Front-end Developer with over ${experience} years of experience in crafting dynamic web applications with a focus on Angular and Node.js. Known for delivering captivating user interfaces and providing technical leadership to enhance team productivity. Proficient in problem-solving and adept at addressing release challenges with innovative solutions.`;
  }
}
