import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements AfterViewInit {
  @ViewChild('myForm') form!: NgForm;

  ngAfterViewInit() {
    console.log('Form:', this.form);
  }

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);
  }

  setFormValue() {
    if (this.form) {
      this.form.setValue({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
    } else {
      console.error('Form is not initialized');
    }
  }

  resetForm() {
    this.form.reset();
  }
}
