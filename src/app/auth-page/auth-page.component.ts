import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CookieService } from "ngx-cookie-service";

import * as interfaces from "../interfaces";


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  cookieValue: string;
  expiredDate: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {  }

  ngOnInit(): void {
    this.expiredDate = new Date();
    this.expiredDate.setDate( this.expiredDate.getDate() + 7 );

    this.cookieService.set('joel','43',{'expires' : this.expiredDate});
    this.cookieValue = this.cookieService.get('joel')
    console.log(this.cookieValue);
  }


  get_user_token(email: HTMLInputElement,password: HTMLInputElement){
    let user:interfaces.User = {
      username:email.value,
      password:password.value
    }

    console.log(email);
    console.log(password);
    this.http.post<interfaces.Token>('http://127.0.0.1:8080/api/account/get-token-auth/', user)
      .subscribe( (data) => {
        console.log(data.token);
      })
  }
}
