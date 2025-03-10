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
            "Develop and maintain source-to-pay procurement software, ensuring efficiency and scalability.",
            "Created functionality and user experience for multiple Merlin Agentic Platforms.",
            "Optimize UI performance by upgrading packages and resolving memory leaks.",
            "Implement AWS services like S3 for file management and SQS for messaging.",
            "Increase code coverage and refactor legacy code for better maintainability.",
            "Conduct code reviews and integrate SonarQube analysis for quality improvements."
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
            "Developed and maintained procurement software using Angular and Bootstrap.",
            "Integrated RESTful APIs using Swagger for seamless data exchange.",
            "Implemented CI/CD pipelines with GoCD for automated deployments.",
            "Ensured adherence to best practices in web development and optimized UI components."
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
            "Played a key role in migrating supplier-side legacy pages to the Dew Drops architecture.",
            "Collaborated with cross-functional teams using Git and Jira for efficient project management.",
            "Conducted code reviews and implemented improvements based on SonarQube analysis."
          ],
          "accomplishments": [
            "Received recognition for quick learning and extra effort in ensuring timely project completion.",
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
            "Assisted in developing and maintaining web applications.",
            "Participated in code reviews and implemented suggested improvements.",
            "Actively learned and applied new technologies relevant to the project."
          ],
          "accomplishments": [
            "Successfully contributed to key features of the application.",
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
