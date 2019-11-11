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
  xVal: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  yVal: BehaviorSubject<number> = new BehaviorSubject<any>(1);
  constructor() { }
  /** update spesific field */
  update(x: number, y: number, bool: boolean): void {
    let data = [...this.matrix.getValue()];
    if (data.length < x || data[0].length < y) return
    x = data.length - x
    y = y - 1
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
    this.xVal.next(x);
    this.yVal.next(y);
    this.init();
  }
  init() {
    var data = Array.from(Array(this.xVal.getValue()), () => Array.from(Array(this.yVal.getValue()), () => { return false }))
    this.matrix.next(data);
  }
  /**will reset the ste with initial values */
  resetState() {
    this.init()
  }
}
