import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";
import { Router } from '@angular/router'

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})

export class ProjectsGalleryComponent implements OnInit {
  wipDefault_Text="This web page is meant to be a collection of all the little projects I\u2019ve been doing over the years. I am still working on it and there are still a lot of projects missing, sorry for the inconvenience if the project you were looking for is not here yet."
  constructor(private router: Router) { }

  ngOnInit(): void {
        //$('h1').css('color','green')
  }

  goto(href: string) {
    this.router.navigate([href]);
  }
}
