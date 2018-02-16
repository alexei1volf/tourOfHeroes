import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MockHeroesService } from './mock-heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { MapService } from './map.service';
import { MapOpenlayerComponent } from './map-openlayer/map-openlayer.component';

enableProdMode();

export const firebaseConfig = {
  apiKey: 'AIzaSyDtLQ__CvlfEQi835LOwHp8uTWXgdxFKXY',
  authDomain: 'map1alexei1volf.firebaseapp.com',
  databaseURL: 'https://map1alexei1volf.firebaseio.com',
  projectId: 'map1alexei1volf',
  storageBucket: '',
  messagingSenderId: '612363096131'
};

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MapBoxComponent,
    MapOpenlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularOpenlayersModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [MockHeroesService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
