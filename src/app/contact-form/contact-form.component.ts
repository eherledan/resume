import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendEmail() {
    this.http.post('http://localhost:8000/api/email', {email: 'erwan.herledan@outlook.fr', name: 'Erwan Herledan', message: 'Yo, ienb ?'}).subscribe(
      res => {
          const response = res.text();
          console.log(response);
      }
    );
  }
}
