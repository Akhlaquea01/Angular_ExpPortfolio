import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
// import { BlogsComponent } from './blogs/blogs.component';

@Component({
    selector: 'app-main',
    imports: [
        HomeComponent,
        ProjectComponent,
        SkillsComponent,
        ExperienceComponent,
        TestimonialsComponent,
        ContactComponent,
        // BlogsComponent,
        EducationComponent
    ],
    templateUrl: './main.component.html'
})
export class MainComponent {

}
