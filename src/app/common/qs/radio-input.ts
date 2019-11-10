import { QuestionBase } from './question-base';

export class RadioInput extends QuestionBase<any> {
    controlType = 'radio';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

