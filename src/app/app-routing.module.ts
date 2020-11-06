import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppreciationsComponent } from "./appreciations/appreciations.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  {path:'appreciations', component:AppreciationsComponent},
  {path:'', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
