import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-to-home',
  templateUrl: './redirect-to-home.component.html',
  styleUrls: ['./redirect-to-home.component.css']
})
export class RedirectToHomeComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToHomePage(){
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.redirectToHomePage();
  }
}
