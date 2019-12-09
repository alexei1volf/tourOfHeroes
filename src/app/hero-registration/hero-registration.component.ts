import { Component, OnInit } from '@angular/core';
import {PowerService} from './power.service';
import {Hero} from '../hero';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hero-registration',
  templateUrl: './hero-registration.component.html',
  styleUrls: ['./hero-registration.component.css']
})
export class HeroRegistrationComponent implements OnInit {

  public hero: Hero = new Hero();

  constructor(public powerService: PowerService) { }

  ngOnInit() {
  }

  onClickSubmit(heroForm: NgForm) {
    console.log(heroForm);
  }
}
