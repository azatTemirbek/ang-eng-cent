import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from '../../common/qs/question-base';

@Component({
  selector: 'app-manual-override',
  templateUrl: './manual-override.component.html',
  styleUrls: ['./manual-override.component.css'],
  providers: [QuestionService]
})
export class ManualOverrideComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(private Qservice: QuestionService) {
    this.questions = this.Qservice.getQuestions();
    console.log(this.questions)
  }

  ngOnInit() {
  }
  /**
   * will get result of the form and i will manually validate
   * @param e will get result of the form
   */
  result(e) {
    console.log(e);
  }

}