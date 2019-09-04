import {Injectable} from '@angular/core';
import { Hero } from './hero';
import {of} from "rxjs/observable/of";
import {BehaviorSubject, Observable, Subject, TimeInterval} from "rxjs";

export class HeroesService {

  private _heroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha' },
    { id: 2, name: 'Mr. Igor' },
    { id: 3, name: 'Mr. Stepan' },
    { id: 4, name: 'Mr. Evgeniy' },
    { id: 5, name: 'Mr. Alex' }
  ];

  heroes$ = new BehaviorSubject([]);

  constructor() {
  }

  getHeroes(): Hero[] {
    return this._heroes;
  }

  changeHero(): void {

  }
}
