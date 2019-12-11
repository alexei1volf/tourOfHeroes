import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Hero} from '../hero';
import {PowerService} from '../hero-registration/power.service';

@Component({
  selector: 'app-hero-registration-reactive',
  templateUrl: './hero-registration-reactive.component.html',
  styleUrls: ['./hero-registration-reactive.component.css']
})
export class HeroRegistrationReactiveComponent implements OnInit {

  public hero: Hero = new Hero();

  constructor(public powerService: PowerService) { }

  ngOnInit() {
  }

  onClickSubmit(heroForm: NgForm) {
    console.log(heroForm);
  }

}
