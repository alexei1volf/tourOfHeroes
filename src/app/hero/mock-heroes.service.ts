import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Hero} from "./hero";

@Injectable()
export class MockHeroesService {

  private stubHeroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha' },
    { id: 2, name: 'Mr. Igor' },
    { id: 3, name: 'Mr. Stepan' },
    { id: 4, name: 'Mr. Evgeniy' },
    { id: 5, name: 'Mr. Alex' }
  ];

  constructor() {
  }

  heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject(this.stubHeroes);
}
