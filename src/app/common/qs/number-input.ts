import { QuestionBase } from './question-base';
/**
 * no tome to bind extra properties like arrial and so on
 * normally we should give option interface to make easier usage
 */
export class NumberInput extends QuestionBase<string> {
  controlType = 'numberInput';
  type: String = 'number';
  labelBefore: false;
  max: number = Infinity;
  min: number = Infinity;
  step: number = 1;
  size: number = 1;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || this.type;
    this.max = options['max'] || this.max;
    this.min = options['min'] || this.min;
    this.step = options['step'] || this.step;
    this.size = options['size'] || this.size;
  }
}