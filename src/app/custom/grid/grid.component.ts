import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateHolderService } from 'src/app/State/stateHolder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {
  subscription: any;
  data: any;
  constructor(public stateHolderService: StateHolderService) {
    this.stateHolderService.setState(4, 4);
  }
  ngOnInit() {
    this.subscription = this.stateHolderService.data.subscribe(data => {
      this.data = data;
    })
  }
  /** un subscibe from the state */
  ngOnDestroy(): void {
    this.subscription.unsubscibe()
  }
  onClick(x,y){
    this.stateHolderService.toggle(x,y)
  }
}
