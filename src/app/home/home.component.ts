import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  youWillFindList=[
    "Routing",
    "Active Forms",
    "HTTP based operation",
    "Responsive layout",
    "Bootstrap classes",
    "Navigation",
    "Logic implementation",
    "Others …"
  ]

  usedForDevelopmentList=[
    "Routing",
    "Observables",
    "Forms",
    "HTTP CRUD operations",
    "Npm",
    "Webpack, bundling",
    "TSLint",
    "Directives, Services, Components, Providers, Classes",
    "Angular CLI",
    "Bootstrap",
    "Binding & interpolation"
  ]

}
