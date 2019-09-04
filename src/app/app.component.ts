import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroesService} from "./heroes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[] = [];

  constructor(public heroService: HeroesService) {
  }

  ngOnInit(): void {
    const heroes1 = this.heroService.getHeroes();
    this.heroes = heroes1;
  }

  onClick(): void {
    this.heroService.changeHero();
  }
}
