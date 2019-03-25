import {NgModule} from "@angular/core";
import {SuperHeroComponent} from "./super-hero.component";
import {RouterModule, Routes} from "@angular/router";

const superHeroRouts: Routes = [
  {path: "super", component: SuperHeroComponent}
];

@NgModule({
  declarations: [
    SuperHeroComponent
  ],
  imports: [
    RouterModule.forChild(superHeroRouts)
  ]
})
export class SuperHeroModule {

}
