import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-registration-reactive',
  templateUrl: './hero-registration-reactive.component.html',
  styleUrls: ['./hero-registration-reactive.component.css']
})
export class HeroRegistrationReactiveComponent implements OnInit {

  public heroForm: FormGroup;
  public hero: Hero;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.heroForm = this.fb.group({
      name: ['alex',
        [Validators.required, Validators.minLength(3)]],
      age: 32,
      email: ['',
        [Validators.required, Validators.email]
      ],
      phone: '',
      notification: 'email'
    });
  }

  onClickSubmit() {
    console.log(this.heroForm);
  }

  onRadioButtonClick(notification: string) {
    const phoneControl = this.heroForm.get('phone');
    if (notification === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
