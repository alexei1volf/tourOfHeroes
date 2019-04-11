import {Component} from "@angular/core";
import {Hero} from "../hero";

@Component({
  selector: 'super-hero-display',
  template: `
    <span>{{hero.id}}</span> <a href="super/edit">{{hero.name}}</a>
`
})
export class SuperHeroDisplayComponent {
  public hero: Hero = {id: 100, name: "Iron Man"}
}
