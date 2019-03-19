import {NgModule} from "@angular/core";
import {SuperHeroComponent} from "./super-hero.component";
import {SuperHeroRoutingModule} from "./super-hero-routing.module";

@NgModule({
  declarations: [
    SuperHeroComponent
  ],

  imports: [
    SuperHeroRoutingModule
  ]
})
export class SuperHeroModule {
}
