import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../hero';
import {HeroesService} from "../heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent{

  @Input()
  heroes: Hero[] = [];

  @Input()
  smallMode: boolean;

  constructor(public heroService: HeroesService) {
    this.smallMode = false;
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

}
