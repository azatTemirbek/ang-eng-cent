import { Injectable } from '@angular/core';
import { QuestionBase } from '../../common/qs/question-base';
import { NumberInput } from '../../common/qs/number-input';
import { Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.validator';
import { RadioInput } from 'src/app/common/qs/radio-input';


@Injectable()
export class QuestionService {
  x: number;
  y: number;
  constructor() {}
  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new NumberInput({
        key: 'x',
        label: 'x',
        order: 1,
        validators: [
          Validators.required,
          Validators.maxLength(this.x),
        ]
      }),
      new NumberInput({
        key: 'y',
        label: 'Y',
        order: 2,
        validators: [
          Validators.required,
          Validators.maxLength(this.y),
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
