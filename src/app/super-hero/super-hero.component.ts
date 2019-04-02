import {Component} from "@angular/core";
import {Hero} from "../hero";
import {HeroesService} from "../heroes.service";

@Component({
  selector: 'super-hero',
  template: `
    <h2>Super hero:</h2>
    <span>{{hero.id}}</span> <a href="#">{{hero.name}}</a>
`
})
export class SuperHeroComponent {

  hero: Hero;

  constructor(public heroService: HeroesService) {
    this.hero = heroService.heroes[0];
  }


}
