import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasjonadka',
  templateUrl: './pasjonadka.component.html',
  styleUrls: ['./pasjonadka.component.css']
})
export class PasjonadkaComponent implements OnInit {

  navigateToPasjonadka(): void {
    //window.location.href = 'https://www.google.com';
    window.open('https://www.pasjonadka.pl', '_blank');
  }
  ngOnInit(): void {
    this.navigateToPasjonadka();
  }

}
