import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Router } from '@angular/router'

@Component({
  selector: 'app-minecraft-home',
  templateUrl: './minecraft-home.component.html',
  styleUrls: ['./minecraft-home.component.scss']
})
export class MinecraftHomeComponent implements OnInit {
  onnlinePlayers = 1
  serverStatus = "Offline"
  isServerOnline = false

  constructor(private http: HttpClient, private router: Router) { }

//gets the info of the server using mcsrvstat
  ngOnInit(): void {
    this.http.get<any>("https://api.mcsrvstat.us/2/joelimgu.myminecraft.org").subscribe((msg:any) => {
        console.log("Looking for server ip: " + msg.ip + " onnline: " +  msg.online);
        this.serverStatus = (msg.online ? "Online" : "Ofline");
        this.isServerOnline = msg.online;
        this.onnlinePlayers = msg.players.online;
    })
  }
//to copy the ips, should add animation
  copy(text: string){
    window.navigator.clipboard.writeText(text);
  }
//to change the routing
  goto(href:string) {
    this.router.navigate([href]);
  }

}
