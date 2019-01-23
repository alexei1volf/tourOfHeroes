import {Injectable, OnInit} from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MockHeroesService {

  private stubHeroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha' },
    { id: 2, name: 'Mr. Igor' },
    { id: 3, name: 'Mr. Stepan' },
    { id: 4, name: 'Mr. Evgeniy' },
    { id: 5, name: 'Mr. Alex' }
  ];

  public superHero: Hero = {id: 100, name: 'Mr. Cool'};

  constructor() {
    setTimeout(() => this.superHero.name = "Mr. Coller", 10000);
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.stubHeroes);
  }
}
