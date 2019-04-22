import {NgModule} from "@angular/core";
import {SuperHeroComponent} from "./super-hero.component";
import {RouterModule, Routes} from "@angular/router";
import {SuperHeroEditComponent} from "./super-hero-edit.component";
import {SuperHeroDisplayComponent} from "./super-hero-display.component";

const superHeroRoutes: Routes = [
  {
    path: '',
    component: SuperHeroComponent,
    children: [
      {path: 'display', component: SuperHeroDisplayComponent},
      {path: 'edit', component: SuperHeroEditComponent}
    ]
  }
];

@NgModule({
  declarations: [
    SuperHeroComponent,
    SuperHeroDisplayComponent,
    SuperHeroEditComponent
  ],
  imports: [
    RouterModule.forChild(superHeroRoutes)
  ]
})
export class SuperHeroModule {

}
