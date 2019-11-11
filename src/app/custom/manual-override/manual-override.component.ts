import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from '../../common/form-elements/question-base';
import { StateHolderService } from 'src/app/State/stateHolder.service';

@Component({
  selector: 'app-manual-override',
  templateUrl: './manual-override.component.html',
  styleUrls: ['./manual-override.component.css'],
  providers: [QuestionService]
})
export class ManualOverrideComponent {
  questions: QuestionBase<any>[];

  constructor(private questionService: QuestionService,public stateHolderService: StateHolderService) {
    this.questionService.x = this.stateHolderService.xVal.getValue();
    this.questionService.y = this.stateHolderService.yVal.getValue();
    this.questions = this.questionService.getQuestions();
  }
  /**
   * will get result of the form and i will manually validate
   * @param e will get result of the form
   */
  result(e:{x:number,y:number,set_to:boolean}) {
    if(!!e.x && !!e.y){
      this.stateHolderService.update(e.y,e.x,e.set_to)
    }
  }

}