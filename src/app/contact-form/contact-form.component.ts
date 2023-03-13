import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name: 'email' },
    { id: 2, name: 'mobile phone' },
    { id: 3, name: 'personally' }
  ]

  cities = [
    { id: 1, name: 'Szczecin' },
    { id: 2, name: 'Poznań' },
    { id: 3, name: 'Warszawa' }
  ]

  myLog(tempVar:any){
    console.log(tempVar);
  }

  logSubmit(f:any){
    console.log(f);
  }
}
