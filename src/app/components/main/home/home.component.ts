import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = "Akhlaque";
  about = "Passionate Front-end Developer with over 3.2 years of experience in crafting dynamic web applications with a focus on Angular and Node.js.Known for delivering captivating user interfaces and providing technical leadership to enhance team productivity.Proficient in  problem - solving and adept at addressing release challenges with innovative solutions.";
  hobby = "Outside of the development realm, I'm an avid technology enthusiast, constantly exploring the latest advancements and innovations. I also enjoy unwinding by playing mobile games and spending quality time chilling with friends. Traveling is another passion of mine, as it allows me to explore new cultures and broaden my horizons."
}
