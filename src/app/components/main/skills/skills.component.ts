import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { svgPath: 'assets/images/logo/html.svg', name: 'HTML', description: 'HyperText Markup Language' },
    { svgPath: 'assets/images/logo/javascript.svg', name: 'Javascript', description: 'Javascript' },
    { svgPath: 'assets/images/logo/css.svg', name: 'CSS', description: 'Cascading Style Sheets' },
    { svgPath: 'assets/images/logo/typescript.svg', name: 'Typescript', description: 'Typescript' },
    { svgPath: 'assets/images/logo/angular.svg', name: 'Angular', description: 'Angular' },
    { svgPath: 'assets/images/logo/sass.svg', name: 'SASS', description: 'Syntactically Awesome Style Sheets' },
    { svgPath: 'assets/images/logo/nodejs.svg', name: 'NodeJs', description: 'Node' },
    { svgPath: 'assets/images/logo/express.svg', name: 'Express', description: 'Express' },
    { svgPath: 'assets/images/logo/bootstrap.svg', name: 'Bootstrap', description: 'Bootstrap' },
    { svgPath: 'assets/images/logo/tailwind-css.svg', name: 'Tailwind', description: 'Tailwind' },
    { svgPath: 'assets/images/logo/mongodb.svg', name: 'MongoDb', description: 'MongoDb' },
    { svgPath: 'assets/images/logo/my-sql.svg', name: 'SQL', description: 'SQL' },
    { svgPath: 'assets/images/logo/redis.svg', name: 'Redis', description: 'Rediss' },
    { svgPath: 'assets/images/logo/swagger.svg', name: 'Swagger', description: 'Swaggers' },
    { svgPath: 'assets/images/logo/sonarqube.svg', name: 'SonarQube', description: 'SonarQube' },
    { svgPath: 'assets/images/logo/backstage.svg', name: 'Backstage', description: 'Backstage' },
    { svgPath: 'assets/images/logo/rookout.svg', name: 'Rookout', description: 'Rookout' },
    { svgPath: 'assets/images/logo/git.svg', name: 'Git', description: 'Git' },
    { svgPath: 'assets/images/logo/jira.svg', name: 'Jira', description: 'Jira' },
    // Add more skills as needed
  ];
}
