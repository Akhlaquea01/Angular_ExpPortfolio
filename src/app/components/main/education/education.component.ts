import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationItems = [
    {
      label: 'Vishveshwarya Group of Institutions',
      date: 'Sep, 2020',
      title: 'Bachelor of Technology (Computer Science and Engineering)',
      content: 'Completed Bachelor of Technology in Computer Science and Engineering from Vishveshwarya Group of Institutions, Datia.'
    },
    {
      label: 'K.R. Bose Smarak College',
      date: 'May, 2016',
      title: 'Intermediate (Science)',
      content: 'Completed Intermediate (Science) from K.R. Bose Smarak College, located in Bairia, Muzaffarpur.'
    },
    {
      label: 'Sacred Heart School',
      date: 'May, 2014',
      title: 'Matriculation',
      content: 'Completed Matriculation from Sacred Heart School,Malighat, Muzaffarpur, Bihar.'
    }
  ];

}
