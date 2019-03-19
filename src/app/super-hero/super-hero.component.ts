import {Component} from "@angular/core";
import {Hero} from "../hero";

@Component({
  selector: 'super-hero',
  template: `
    <h2>Super hero:</h2>
    <span>{{hero.id}}</span> <a href="#">{{hero.name}}</a>
`
})
export class SuperHeroComponent {
  public hero: Hero = {id: 100, name: "Iron Man"}
}
