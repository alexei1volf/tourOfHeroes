import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  private _powers: string[] = ['walking in the snow', 'frost resistance', 'always dry feet'];

  public powers = new BehaviorSubject(this._powers);

}
