import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent implements OnInit {
  Technologies: any[] = [
    {
      name: "Angular",
      level: "90%",
      state:"excellent"
    },
    {
      name: "NodeJS",
      level: "80%",
      state:"very-good"
    },
    {
      name: "React, NodeJS, MongoDB",
      level: "50%",
      state:"average"
    },
    {
      name: "TypeScript",
      level: "80%",
      state:"very-good"
    },
    {
      name: "HTML, CSS, Bootstrap",
      level: "90%",
      state:"excellent"
    },
    {
      name: "JavaScript",
      level: "90%",
      state:"excellent"
    },
    {
      name: "Python, C",
      level: "60%",
      state:"good"
    }
  ];
  Tools: any[] = [
    {
      name: "GitHub",
      level: "90%",
      state:"excellent"
    },
    {
      name: "Office",
      level: "60%",
      state:"good"
    },
    {
      name: "Windows",
      level: "70%",
      state:"very-good"
    },
    {
      name: "Sql",
      level: "30%",
      state:"poor"
    },
  ];
  Methods:any[] = [
    {
      name: "Scrum",
      level: "60%",
      state:"good"
    },
    {
      name: "Design Thinking",
      level: "70%",
      state:"very-good"
    },
    {
      name: "DevOps",
      level: "20%",
      state:"poor"
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }
}




