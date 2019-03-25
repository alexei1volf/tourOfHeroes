import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MockHeroesService } from './mock-heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hero', component: HeroesComponent},
  {path: 'super', loadChildren: './super-hero/super-hero.module#SuperHeroModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [MockHeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
