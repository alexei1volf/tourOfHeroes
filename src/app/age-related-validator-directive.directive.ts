import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appAgeRelatedValidatorDirective]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeRelatedValidatorDirectiveDirective, multi: true }]
})
export class AgeRelatedValidatorDirectiveDirective implements Validator{

  constructor() { }

  validate(control: FormGroup): ValidationErrors | null {
    const name = control.get('name');
    const age = control.get('age');

    return name && age && name.value === "alex" && age.value > 32 ? { 'alexAgeViolation': true } : null;
  }

}
