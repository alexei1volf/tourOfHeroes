import { Component} from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{

  heroes = [];
  selectedHero: Hero;

  constructor(public heroService: HeroesService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
