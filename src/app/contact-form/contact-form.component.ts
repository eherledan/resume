import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  alert: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendEmail() {
    this.alert = {type: 'success', content: 'Votre message a bien été envoyé, je vous recontacterai au plus vite.', class: 'animated fadeIn'};
    this.http.post('http://localhost:8000/api/email', {email: this.email, name: this.name, message: this.message}).subscribe(
      res => {
        if (res.response === 'SUCCESS') {
          this.alert = {type: 'success', content: 'Votre message a bien été envoyé, je vous recontacterai au plus vite.'};
        } else {
          this.alert = {type: 'danger', content: 'Erreur, veuillez réessayer.'};
        }
        setTimeout(() => {
          this.alert = null;
        }, 40000);
      }
    );
  }
}
