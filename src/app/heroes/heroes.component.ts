import {Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  private _heroes = [];

  get heroes(): Hero[] {
    console.log("get heroes");
    return this._heroes;
  }

  selectedHero: Hero;

  constructor(public heroService: HeroesService) {
  }

  ngOnInit(): void {
    this._heroes = this.heroService.heroes;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
