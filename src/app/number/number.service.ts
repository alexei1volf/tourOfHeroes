import {Observable} from "rxjs";

export class NumberService {

  private numbers: number[] = Array.apply(null, {length: 10}).map(Number.call, Number);

  constructor() {

  }

  async loadNumbersLikePromise(): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      resolve(this.numbers);
    })
  }

  loadNumbersLikeObservable(): Observable<number[]> {
    return Observable.of(this.numbers);
  }

  public plusOne() {
    this.numbers.push(this.numbers.length);
  }
}
