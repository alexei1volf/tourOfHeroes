import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-registration-reactive',
  templateUrl: './hero-registration-reactive.component.html',
  styleUrls: ['./hero-registration-reactive.component.css']
})
export class HeroRegistrationReactiveComponent implements OnInit {

  public heroForm: FormGroup;
  public hero: Hero;

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl()
    });
  }

  onClickSubmit() {
    console.log(this.heroForm);
  }

}
