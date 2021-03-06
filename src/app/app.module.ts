/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';

import { SimplebarAngularModule } from 'simplebar-angular';
import { AppreciationsComponent } from './appreciations/appreciations.component';
import { MinecraftHomeComponent } from './minecraft-home/minecraft-home.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsGalleryComponent,
    BottomPageComponent,
    AppreciationsComponent,
    MinecraftHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplebarAngularModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
