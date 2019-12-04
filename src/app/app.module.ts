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
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import {RateService} from './money-transfer/rate.service';
import { TimerComponent } from './timer/timer.component';
import { HeroRegistrationComponent } from './user-registration/hero-registration.component';
import { AlexForbiddenDirective } from './alex-forbidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    SuperHeroComponent,
    ArticlesComponent,
    MoneyTransferComponent,
    TimerComponent,
    HeroRegistrationComponent,
    AlexForbiddenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    ArticleService,
    RateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
