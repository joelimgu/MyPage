import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as interfaces from "../interfaces";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {  }


  get_user_token(email,password){
    let user:interfaces.User = {
      username:email,
      password:password
    }
    this.http.post<any>('http://127.0.0.1:8080/api/account/get-token-auth/', {username:'joel1',password:'1234'})
      .subscribe( (data) => {
        console.log(data.token);
      })
  }

}
