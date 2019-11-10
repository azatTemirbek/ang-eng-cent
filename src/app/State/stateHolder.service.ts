import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateHolderService {
  /** will be use as a source of truth */
  private matrix = new BehaviorSubject<any>(null);
  /** will ve used to subscribe */
  data = this.matrix.asObservable();
  xVal: number = 1;
  yVal: number = 1;
  constructor() { }
  /** update spesific field */
  update(x: number, y: number, bool: number): void {
    let data = [...this.matrix.getValue()];
    data[x][y] = bool
    this.matrix.next(data);
  }
  /** wıll toggle the selected state */
  toggle(x: number, y: number): void {
    let data = [...this.matrix.getValue()];
    data[x][y] = !data[x][y]
    this.matrix.next(data);
  }
  /** will set state to default  */
  setState(x: number, y: number): void {
    this.xVal = x;
    this.yVal = y;
    this.init()
  }
  init() {
    var data = Array.from(Array(this.xVal), () => new Array(this.xVal))
    this.matrix.next(data);
  }
  /**will reset the ste with initial values */
  resetState() {
    this.init()
  }


}
