import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators} from '@angular/forms';
import {Hero} from '../hero';
import {PowerService} from '../hero-registration/power.service';

function ageNameValidator(control: FormGroup): ValidationErrors | null {
  const name = control.get('name');
  const age = control.get('age');

  return name && age && name.value === 'alex' && age.value > 32 ? {'alexAge': true} : null;
}

@Component({
  selector: 'app-hero-registration-reactive',
  templateUrl: './hero-registration-reactive.component.html',
  styleUrls: ['./hero-registration-reactive.component.css']
})
export class HeroRegistrationReactiveComponent implements OnInit {

  public heroForm: FormGroup;
  public formMessage: String;
  public validationMessages = {
    alexAge: "alex is not so old"
  };

  get addresses(): FormArray {
    return <FormArray>this.heroForm.get('addresses');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.heroForm = this.fb.group({
        name: 'alex',
        age: 32,
        addresses: this.fb.array([this.createAddressControl()])
      },
      {
        validators: ageNameValidator
      });


    this.heroForm.statusChanges.subscribe(value => {
      this.formMessage = '';
      if (this.heroForm.errors) {
        this.formMessage = Object.keys(this.heroForm.errors)
          .map(key => this.validationMessages[key])
          .join(' ');
      }
    })
  }

  createAddressControl(): FormGroup {
    return this.fb.group({
      city: '',
      street: ''
    });
  }

  addAddress() {
    this.addresses.push(this.createAddressControl());
  }

  onClickSubmit() {
    console.log(this.heroForm);
  }

}
