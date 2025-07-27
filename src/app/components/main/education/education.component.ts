import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html'
})
export class EducationComponent {
  educationItems = [
    {
      label: 'Vishveshwarya Group of Institutions, Ghaziabad, UP, India',
      date: '2020',
      title: 'Bachelor of Technology (CSE)',
      content: 'Completed Bachelor of Technology in Computer Science and Engineering.'
    },
    {
      label: 'K.R. Bose Smarak College, Muzaffarpur, Bihar, India',
      date: '2016',
      title: 'Intermediate (Mathematics)',
      content: 'Completed Intermediate (Mathematics).'
    },
    {
      label: 'Sacred Heart School',
      date: 'May, 2014',
      title: 'Matriculation',
      content: 'Completed Matriculation from Sacred Heart School,Malighat, Muzaffarpur, Bihar.'
    }
  ];

}
