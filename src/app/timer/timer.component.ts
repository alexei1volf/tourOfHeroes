import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer$: Observable<number>;
  stop$ = new Subject();

  constructor() { }

  ngOnInit() {
  }

  startClicked() {
    this.timer$ = interval(1000).pipe(
      takeUntil(this.stop$)
    );
  }

  stopClicked() {
    this.stop$.next();
  }
}
