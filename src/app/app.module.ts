import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { MockHeroesService } from './hero/mock-heroes.service';
import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import { PhotoComponent } from './photo/photo.component';
import {PhotoService} from "./photo/photo.service";

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hero', component: HeroesComponent},
  {path: 'photo', component: PhotoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    HomeComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule
  ],
  providers: [MockHeroesService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
