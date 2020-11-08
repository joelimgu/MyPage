import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  enable_mail_popup(){
    document.getElementById('pop-up-backgrownd').style.display = 'inline';
    document.getElementById('pop-up-backgrownd').style.animation = 'fade-in .5s forwards'

    document.getElementById('mail-pop-up').style.animation = 'pop-in .5s forwards'
  }

  enable_phone_popup(){
    document.getElementById('pop-up-backgrownd').style.display = 'inline';
    document.getElementById('pop-up-backgrownd').style.animation = 'fade-in .5s forwards'

    document.getElementById('phone-pop-up').style.animation = 'pop-in .5s forwards'
  }


  copy_text_to_clopboard(text:string, htmlid: string, toolTipTextid: string) {
    window.navigator.clipboard.writeText(text);
    document.getElementById(toolTipTextid).innerHTML = "Copied! ;)";


    let element = document.getElementById(htmlid);
    element.classList.remove("copy-logo-animation");
    void element.offsetWidth;
    element.classList.add("copy-logo-animation");
  }


  copy_out(toolTipTextid: string){
    document.getElementById(toolTipTextid).innerHTML = "Copy";
  }

  disable_mail_popup() {
    document.getElementById('pop-up-backgrownd').style.animation = 'fade-out .5s forwards'
    document.getElementById('mail-pop-up').style.animation = 'pop-out .5s forwards'
    document.getElementById('phone-pop-up').style.animation = 'pop-out .5s forwards'
  }


}
