import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {UniqueNameValidator} from './unique-name-validator';

@Directive({
  selector: '[appUniqueName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueNameValidator),
      multi: true
    }
  ]

})
export class UniqueNameDirective {

  constructor(private validator: UniqueNameValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}
