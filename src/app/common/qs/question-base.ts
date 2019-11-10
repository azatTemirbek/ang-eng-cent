import { Validators, ValidatorFn, AbstractControlOptions } from '@angular/forms';

export class QuestionBase<T>{
  value: T;
  key: string;
  label: string = 'Provide label';
  required: boolean = false;
  order: number;
  controlType: string;
  className: string = 'form-control';
  labelBefore: boolean;
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    className?: string,
    labelBefore?: boolean
    validators?:ValidatorFn | ValidatorFn[] | AbstractControlOptions
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.className = options.className || 'form-control';
    this.labelBefore = options.labelBefore;
    this.validators = options.validators;
  }
}