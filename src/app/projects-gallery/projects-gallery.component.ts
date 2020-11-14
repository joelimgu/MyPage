import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";
import { Router } from '@angular/router'

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})

export class ProjectsGalleryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
        //$('h1').css('color','green')
  }

  goto(href: string) {
    this.router.navigate([href]);
  }
}
