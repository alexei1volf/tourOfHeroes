import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {SuperHeroComponent} from "./super-hero/super-hero.component";
import { NumberComponent } from './number/number.component';
import {NumberService} from "./number/number.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    SuperHeroComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroesService, NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
