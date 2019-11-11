import { Injectable } from '@angular/core';
import { QuestionBase } from '../../common/form-elements/question-base';
import { NumberInput } from '../../common/form-elements/number-input';
/** https://angular.io/api/forms/Validators */
import { Validators } from '@angular/forms';
import { RadioInput } from 'src/app/common/form-elements/radio-input';


@Injectable()
export class QuestionService {
  x: number;
  y: number;
  constructor() {}
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new NumberInput({
        key: 'x',
        label: 'X:',
        order: 1,
        validators: [
          Validators.required,
          Validators.max(this.x),
          Validators.min(0),
        ]
      }),
      new NumberInput({
        key: 'y',
        label: 'Y:',
        order: 2,
        validators: [
          Validators.required,
          Validators.max(this.y),
          Validators.min(0),
        ]
      }),
      new RadioInput({
        key: 'set_to',
        label: 'Set To',
        type: 'radio',
        value: true,
        options: [
          {key: 'ON',  value: true},
          {key: 'OFF',  value: false}
        ],
        required: true,
        order: 3,
        validators: [
          Validators.required,
        ]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
