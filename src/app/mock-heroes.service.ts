import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Hero } from './hero';

@Injectable()
export class MockHeroesService {

  private stubHeroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha' },
    { id: 2, name: 'Mr. Igor' },
    { id: 3, name: 'Mr. Stepan' },
    { id: 4, name: 'Mr. Evgeniy' },
    { id: 5, name: 'Mr. Alex' }
  ];

  private heroes = new BehaviorSubject<any>(this.stubHeroes);

  hero = this.heroes.asObservable();

  constructor() { }

  changeHero(hero) {
    this.heroes.next(hero);
  }

}
