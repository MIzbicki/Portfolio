import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HTTPRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewMode: string = 'Part 1';

  onNavClick(vMode: string) {
    this.viewMode = vMode;
  }
}

export enum ngSwitchType {
  currentPlayer = 'currentPlayer',
  winner = 'winner',
  draw = 'draw'
 }
