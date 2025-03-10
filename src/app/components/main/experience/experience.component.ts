import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {


  toggleResponsibilities(position: any): void {
    position.showAllResponsibilities = !position.showAllResponsibilities;
  }

  toggleAccomplishments(position: any): void {
    position.showAllAccomplishments = !position.showAllAccomplishments;
  }

  timeline = [
    {
      "company_name": "Zycus",
      "active": true,
      "logo": "assets/images/logo/zycus.png",
      "positions": [
        {
          "title": "Senior Software Engineer",
          "employment_type": "Full-time",
          "tenure": "Apr 2024 - Present",
          "duration": "1 yr",
          "location": "Bengaluru, Karnataka, India · Hybrid",
          "showAllAccomplishments": false,
          "showAllResponsibilities": false,
          "responsibilities": [
            "Develop and maintain the codebase for source-to-pay procurement software solutions, ensuring efficiency and scalability.",
            "Utilize Angular Material, JSON, Bootstrap, and Bitbucket to create visually appealing and responsive front-end designs.",
            "Design engaging user interfaces using Angular, JavaScript, and SASS.",
            "Conduct thorough code reviews and implement improvements using SonarQube analysis to enhance code quality.",
            "Leverage GitHub and Jira for streamlined project management and version control.",
            "Integrate RESTful APIs using Swagger, ensuring seamless data exchange between services.",
            "Optimize UI builds, upgrade packages, and fix memory leak issues to improve performance.",
            "Increase code coverage and refactor legacy code for better maintainability.",
            "Implement cloud-based solutions such as AWS S3 for file management and AWS SQS for messaging services.",
            "Contribute to multiple Merlin Agentic Platforms, enhancing functionality and user experience."
          ],
          "accomplishments": [
            "Received Monthly Goody in November 2024 for dedication and efforts.",
            "Completed SQL Bootcamp on Udemy.",
            "Successfully completed FY24-25 Master Course - GDUS Delivery - Salesforce Training (Internal)."
          ]
        },
        {
          "title": "Software Engineer",
          "employment_type": "Full-time",
          "tenure": "May 2022 - Jul 2024",
          "duration": "2 yrs 3 mos",
          "location": "Bengaluru, Karnataka, India · Hybrid",
          "showAllAccomplishments": false,
          "showAllResponsibilities": false,
          "responsibilities": [
            "Developed and maintained the codebase for source-to-pay procurement software solutions using Angular, JSON, Bootstrap, and Bitbucket.",
            "Conducted code reviews and implemented improvements based on SonarQube analysis to ensure high-quality work.",
            "Integrated RESTful APIs using Swagger for seamless data exchange and utilized GoCD for continuous integration and deployment.",
            "Ensured adherence to best practices in HTML, CSS, and HTML5 for web development."
          ],
          "accomplishments": [
            "Received Individual Goody in April 2023 for consistently demonstrating a can-do attitude, resourcefulness, and delivering high-quality work within project timelines.",
            "Completed Clean Code Course on Udemy."
          ]
        },
        {
          "title": "Associate Software Engineer",
          "employment_type": "Full-time",
          "tenure": "Jul 2021 - Apr 2022",
          "duration": "10 mos",
          "location": "Bangalore Urban, Karnataka, India · Hybrid",
          "showAllAccomplishments": false,
          "showAllResponsibilities": false,
          "responsibilities": [
            "Developed and maintained codebase for source-to-pay procurement software solutions using Angular and SASS.",
            "Conducted code reviews and implemented improvements based on SonarQube analysis.",
            "Collaborated with cross-functional teams using Git and Jira for efficient project management.",
            "Integrated RESTful APIs using Swagger for seamless data exchange."
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
          "showAllAccomplishments": false,
          "showAllResponsibilities": false,
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
            "Completed Angular Developer Certification | Edureka."
          ]
        }
      ]
    }

    // {
    //   "company_name": "Karvy",
    //   active: false,
    //   "logo": "assets/images/logo/karvy.png",
    //   "positions": [
    //     {
    //       "title": "Customer Support Officer",
    //       "employment_type": "Full-time",
    //       "tenure": "July 2019 - August 2019",
    //       "duration": "1 months",
    //       "location": "Noida Area, India",
    //       showAllAccomplishments: false,
    //       showAllResponsibilities: false,
    //       "responsibilities": [
    //       ],
    //       "accomplishments": [
    //       ]
    //     }
    //   ]
    // }
  ];

}
