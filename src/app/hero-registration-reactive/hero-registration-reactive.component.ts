import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Hero} from '../hero';
import {PowerService} from '../hero-registration/power.service';

@Component({
  selector: 'app-hero-registration-reactive',
  templateUrl: './hero-registration-reactive.component.html',
  styleUrls: ['./hero-registration-reactive.component.css']
})
export class HeroRegistrationReactiveComponent implements OnInit {

  public heroForm: FormGroup;
  get addresses(): FormArray {
    return <FormArray>this.heroForm.get('addresses');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.heroForm = this.fb.group({
      name: 'alex',
      age: 32,
      addresses: this.fb.array([this.createAddressControl()])
    })
  }

  createAddressControl(): FormGroup {
    return this.fb.group({
      city: '',
      street: ''
    })
  }

  addAddress() {
    this.addresses.push(this.createAddressControl());
  }

  onClickSubmit() {
    console.log(this.heroForm);
  }

}
