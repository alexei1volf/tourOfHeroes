import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MockHeroesService } from './mock-heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {RouterModule, Routes} from "@angular/router";
import {SuperHeroModule} from "./super-hero/super-hero.module";

const appRouts: Routes = [
  {path: "hero", component: HeroesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    SuperHeroModule
  ],
  providers: [MockHeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
