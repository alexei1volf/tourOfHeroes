import {NgModule} from "@angular/core";
import {SuperHeroComponent} from "./super-hero.component";
import {RouterModule, Routes} from "@angular/router";

const superHeroRoutes: Routes = [
  {path: '', component: SuperHeroComponent}
];

@NgModule({
  declarations: [
    SuperHeroComponent
  ],
  imports: [
    RouterModule.forChild(superHeroRoutes)
  ]
})
export class SuperHeroModule {

}
