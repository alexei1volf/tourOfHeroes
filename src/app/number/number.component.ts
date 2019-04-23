import { Component, OnInit } from '@angular/core';
import {NumberService} from "./number.service";

@Component({
  selector: 'number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  _numbers: number[] = [];

  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.loadNumbersLikeObservable();
  }

  private loadNumbersLikePromise() {
    this.numberService.loadNumbersLikePromise().then((numbers: number[]) => {
      this._numbers = numbers;
    });
  }

  private async loadNumbersLikePromiseAwait() {
    this._numbers = await this.numberService.loadNumbersLikePromise();
  }

  private loadNumbersLikeObservable() {
    this.numberService.loadNumbersLikeObservable().subscribe((numbers: number[]) => {
      this._numbers = numbers;
    })
  }

  public onPlusClick() {
    this.numberService.plusOne();
  }
}
