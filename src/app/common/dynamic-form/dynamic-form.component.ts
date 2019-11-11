import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../form-elements/question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  /** list of form elements to be rendered inside form */
  @Input() questions: QuestionBase<any>[] = [];
  /** label for the form */
  @Input() btnLabel: String = "Save";
  /** props to show fform state on browser */
  @Input() debug: Boolean = false;
  /** a callback function to get result of the form  */
  @Output() result: EventEmitter<any> = new EventEmitter();
  /** angular form group */
  form: FormGroup;
  /** placeholder to hold form data as a string */
  payLoad: String = '';

  constructor(private QCService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.QCService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    if (this.form.status == 'VALID') {
      this.result.emit(this.form.value);
    }
  }

}