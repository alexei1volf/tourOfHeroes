import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HeroesService} from '../heroes.service';
import {catchError, first, map, take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator implements AsyncValidator{
  constructor(private heroesService: HeroesService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.heroesService.isNameTaken(control.value).pipe(
      first(),
      map(isTaken => (isTaken ? { 'isAlreadyUsed': true } : null)),
      catchError(() => null)
    );
  }

}
