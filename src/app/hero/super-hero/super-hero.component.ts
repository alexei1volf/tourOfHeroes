import {Component} from "@angular/core";

@Component({
  selector: 'super-hero',
  template: `
    <h2>Super hero:</h2>
    <div>
      <a routerLink="display">Display</a>
      <a routerLink="edit">Edit</a>
    </div>
    <br/>
    <router-outlet></router-outlet>
    `
})
export class SuperHeroComponent {
}
