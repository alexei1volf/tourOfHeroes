import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BehaviorSubject, combineLatest, merge, Subject, zip} from 'rxjs';
import {combineAll, debounceTime, map, tap} from 'rxjs/operators';
import {Transaction} from '../transaction';
import {RateService} from './rate.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit {

  fromAccountChange$ = new Subject<string>();
  toAccountChange$ = new Subject<string>();
  amountOfMoneyChange$ = new BehaviorSubject<number>(0);
  result: number = 0;
  commission: number = 0;

  constructor(private rateService: RateService) {
  }

  ngOnInit() {
    combineLatest([this.fromAccountChange$, this.toAccountChange$, this.amountOfMoneyChange$]).pipe(
      debounceTime(500),
      map(([from, to, amount]) => {
        return <Transaction>{from: from, to: to, amount: amount};
      })
    ).subscribe(transaction => this.recalculateCommission(transaction));

    combineLatest([this.amountOfMoneyChange$, this.rateService.rate$]).pipe(
      debounceTime(500),
      map(([amount, rate]) => {
        return amount * rate;
      })
    ).subscribe(result => this.result = result);
  }

  onClickSubmit(form: NgForm) {
    console.log(form);
  }

  onFromAccountChange(fromAccount: string) {
    this.fromAccountChange$.next(fromAccount);
  }

  onToAccountChange(toAccount: string) {
    this.toAccountChange$.next(toAccount);
  }

  onAmountOfMoneyChange(amountOfMoney: number) {
    this.amountOfMoneyChange$.next(amountOfMoney);
  }

  recalculateCommission(transaction: Transaction) {
    if (transaction.to === "alex") {
        this.commission = 500000;
    } else {
      this.commission = transaction.amount / 100 * 10;
    }

  }
}
