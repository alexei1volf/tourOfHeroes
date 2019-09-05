import {HeroesService} from "./heroes.service";
import {Hero} from "./hero";

export class HeroesServiceMock implements HeroesService {
  private _heroes: Hero[] = [
    { id: 1, name: 'alex' }
  ];
  heroes$: BehaviorSubject<any[]>;

  changeHero(): void {
  }

  getHeroes(): Hero[] {
    return [];
  }

  async loadHeroes(): Promise<Hero[]> {
    return Promise.resolve(this._heroes);
  }

}
