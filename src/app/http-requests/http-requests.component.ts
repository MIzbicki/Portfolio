import { Component } from '@angular/core';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HTTPRequestsComponent {

  viewMode = 'Part 1';

  onNavClick(vMode: string) {
    this.viewMode = vMode;
  }
}

export enum ngSwitchType {
  currentPlayer = 'currentPlayer',
  winner = 'winner',
  draw = 'draw'
 }
