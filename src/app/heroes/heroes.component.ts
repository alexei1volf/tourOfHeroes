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
  superHero: Hero;

  constructor(public heroService: MockHeroesService) {

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
    this.superHero = this.heroService.superHero;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
