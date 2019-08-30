import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailsComponent{

  @Input() hero: Hero;

  constructor() { }

}
