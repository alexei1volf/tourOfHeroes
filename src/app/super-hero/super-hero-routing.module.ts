import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SuperHeroComponent} from "./super-hero.component";

const superHeroRoutes: Routes = [
  { path: 'super', component: SuperHeroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(superHeroRoutes)
  ]
})
export class SuperHeroRoutingModule {

}
