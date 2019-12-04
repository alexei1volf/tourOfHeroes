import {Injectable} from '@angular/core';
import { Hero } from './hero';
import {Observable} from 'rxjs';

@Injectable()
export class HeroesService {

  public heroes: Hero[] = [
    { id: 1, name: 'Ms. Dasha', age: 10, power: "crazy"},
    { id: 2, name: 'Mr. Igor', age: 10, power: "crazy" },
    { id: 3, name: 'Mr. Stepan', age: 10, power: "crazy" },
    { id: 4, name: 'Mr. Evgeniy', age: 10, power: "crazy" },
    { id: 5, name: 'Mr. Alex', age: 10, power: "crazy" }
  ];

  constructor() {
  }

  public isNameTaken(name: string): Observable<boolean> {
    //go to the backend to check it
    return new Observable(subscriber => {
      const isTaken = name === "boris";
      subscriber.next(isTaken);
    })
  }

}
