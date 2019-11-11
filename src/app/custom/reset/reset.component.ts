import { Component, OnInit } from '@angular/core';
import { StateHolderService } from 'src/app/State/stateHolder.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(public stateHolderService: StateHolderService) { }
  onReset(event:Event){
    this.stateHolderService.resetState()
  }
  
}
