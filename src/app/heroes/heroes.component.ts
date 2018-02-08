import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MockHeroesService } from '../mock-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes = [];

  constructor(private _data: MockHeroesService) {

  }

  ngOnInit() {
    this._data.hero.subscribe(res => this.heroes = res);
  }

}
