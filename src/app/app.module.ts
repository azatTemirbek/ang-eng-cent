import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './common/dynamic-form/dynamic-form.component';
import { QuestionControlService } from './common/qs/question-control.service';
import { DynamicFormElementComponent } from './common/dynamic-form-element/dynamic-form-element.component';
import { ManualOverrideComponent } from './custom/manual-override/manual-override.component';
import { QuestionService } from './custom/manual-override/question.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormElementComponent, ManualOverrideComponent],
  bootstrap: [AppComponent],
  providers: [QuestionControlService, QuestionService]
})
export class AppModule { }
