import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';

import { SimplebarAngularModule } from 'simplebar-angular';
import { AppreciationsComponent } from './appreciations/appreciations.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsGalleryComponent,
    BottomPageComponent,
    AppreciationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
