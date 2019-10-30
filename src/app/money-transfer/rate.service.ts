import {Observable, timer} from 'rxjs';

export class RateService {
  rate$ = timer(0, 10000);
}
