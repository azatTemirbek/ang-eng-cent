import { QuestionBase } from './question-base';
/**
 * todo: must have option interface to use easier
 * todo: ErrorHandler and Validator class should be implemented in the future
 * todo:extra property bindings should be implemented in future (arial,max,min.......)
 */
export class TextInput extends QuestionBase<string> {
  controlType = 'textInput';
  type: String = 'text';
  labelBefore:false

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}