import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appAlexForbidden]',
  providers: [{provide: NG_VALIDATORS, useExisting: AlexForbiddenDirective, multi: true}]
})
export class AlexForbiddenDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const isAlex = control.value === "Alex" || control.value === "alex";
    return isAlex ? {'forbiddenName': {value: control.value}} : null;
  }

}
