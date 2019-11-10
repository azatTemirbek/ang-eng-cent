import { QuestionBase } from './question-base';

export class RadioListInput extends QuestionBase<any>{
  controlType = 'radioList';
  type: string = 'radio';
  labelBefore: false;
  options: [] = []

  constructor(params: {} = {}) {
    super(params);
    this.type = params['type'] || this.type;
    this.options = params['options'] || [];
    debugger
  }
}