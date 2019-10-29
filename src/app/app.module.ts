import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {SuperHeroComponent} from "./super-hero/super-hero.component";
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    SuperHeroComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
