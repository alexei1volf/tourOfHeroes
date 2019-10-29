import {Component} from "@angular/core";

@Component({
  selector: 'super-hero',
  template: `
      <h2>Super hero:</h2>

      <div>
          <label>price1</label>
          <input type="number" [ngModel]="price1" (ngModelChange)="onFirstPriceChange($event)">
      </div>

      <div>
          <label>price2</label>
          <input type="number" [ngModel]="price2" (ngModelChange)="onSecondPriceChange($event)">
      </div>

      <div>
          <label>total</label>
          <input type="number" [ngModel]="total">
      </div>
  `
})
export class SuperHeroComponent {

  price1 = 1;
  price2 = 2;
  total = 3;

  constructor() {

  }

  onFirstPriceChange(price: number) {
    this.price1 = price;
    this.recalculateTotal();
  }

  onSecondPriceChange(price: number) {
    this.price2 = price;
    this.recalculateTotal();
  }

  recalculateTotal() {
    console.log("recalculate");
    this.total = this.price1 + this.price2;
    this.price1 = 10;
    this.price2 = 20;
  }
}
