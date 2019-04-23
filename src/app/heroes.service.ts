import {Injectable} from '@angular/core';
import { Hero } from './hero';

export class HeroesService {

  public heroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha' },
    { id: 2, name: 'Mr. Igor' },
    { id: 3, name: 'Mr. Stepan' },
    { id: 4, name: 'Mr. Evgeniy' },
    { id: 5, name: 'Mr. Alex' }
  ];

  constructor() {
  }

}
