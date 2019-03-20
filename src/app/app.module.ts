import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MockHeroesService } from './mock-heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {SuperHeroComponent} from "./super-hero/super-hero.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    SuperHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MockHeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
