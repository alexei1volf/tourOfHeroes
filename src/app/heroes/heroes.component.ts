import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MockHeroesService } from '../mock-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];
  selectedHero: Hero;

  constructor(private _data: MockHeroesService) {

  }

  getHeroes(): void {
    this._data.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
