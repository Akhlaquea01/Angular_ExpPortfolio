import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  timeline = [
    {
      "company_name": "Zycus",
      active: true,
      "logo": "assets/images/logo/zycus.png",
      "positions": [
        {
          "title": "Software Engineer",
          "employment_type": "Full-time",
          "tenure": "May 2022 - Present",
          "duration": "1 yr 11 mos",
          "location": "Bengaluru, Karnataka, India · Remote",
          "responsibilities": [
            "Develop and maintain codebase for source-to-pay procurement software solutions.",
            "Utilize Angular Material, JSON, Bootstrap, and Bitbucket for efficient and visually appealing front-end development.",
            "Implement Angular, JavaScript, and SASS to create engaging user interfaces.",
            "Conduct code reviews and implement improvements based on SonarQube analysis.",
            "Utilize GitHub and Jira for effective project management and version control.",
            "Integrate RESTful APIs using Swagger for seamless data exchange.",
            "Ensure adherence to best practices in HTML, CSS, and HTML5 for web development.",
            "Utilize GoCD for continuous integration and deployment.",
            "Utilize Git for version control and collaborative development."
          ],
          "accomplishments": [
            "Received Individual Goody in April 2023 for consistently demonstrating a can-do attitude, resourcefulness, and delivering high-quality work within project timelines.",
            "Clean Code Course Completion on Udemy."
          ]
        },
        {
          "title": "Associate Software Engineer",
          "employment_type": "Full-time",
          "tenure": "Jul 2021 - Apr 2022",
          "duration": "10 mos",
          "location": "Bangalore Urban, Karnataka, India · Hybrid",
          "responsibilities": [
            "Developed and maintained codebase for source-to-pay procurement software solutions.",
            "Utilized Angular and SASS to create engaging and responsive user interfaces.",
            "Conducted code reviews and implemented improvements based on SonarQube analysis.",
            "Collaborated with cross-functional teams using tools like GitHub and Jira for efficient project management.",
            "Integrated RESTful APIs using Swagger for seamless data exchange.",
            "Ensured the implementation of best practices in HTML and CSS for web development."
          ],
          "accomplishments": [
            "Played a key role in the migration of supplier-side legacy pages to the Dew Drops architecture.",
            "Received recognition for being a quick learner and putting in extra effort to ensure timely completion of work.",
            "Participated in Zycus' two-day Hackerfest, showcasing problem-solving skills and teamwork."
          ]
        },
        {
          "title": "Software Engineering Trainee",
          "employment_type": "Full-time",
          "tenure": "Feb 2021 - Jun 2021",
          "duration": "5 mos",
          "location": "Bangalore Urban, Karnataka, India · Remote",
          "responsibilities": [
            "Assisted senior developers in developing and maintaining a codebase for web applications.",
            "Participated in code reviews, identified areas for improvement, and implemented suggested changes.",
            "Collaborated with team members to troubleshoot and debug issues in the application.",
            "Actively learned and applied new technologies and frameworks relevant to the project."
          ],
          "accomplishments": [
            "Successfully contributed to the development of key features of the application.",
            "Received positive feedback for code quality and adherence to best practices.",
            "Demonstrated a quick learning ability and adaptability in grasping new concepts and technologies.",
            "Angular Developer Certification | Edureka."
          ]
        }
      ]
    },
    
  ];

}
