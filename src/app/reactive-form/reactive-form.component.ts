import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  options = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.email]),
      ]),
      selectedOption: ['', Validators.required],
    });

    this.myForm.statusChanges.subscribe((status) => {
      console.log('Form Status:', status);
    });

    this.myForm.valueChanges.subscribe((value) => {
      console.log('Form Value:', value);
    });
  }

  get emails() {
    return this.myForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.control('', [Validators.required, Validators.email])
    );
  }

  removeEmail(index: number) {
    if (this.emails.length > 1) {
      this.emails.removeAt(index);
    }
  }

  onSubmit() {
    console.log('Form Data:', this.myForm.value);
  }

  setFormValue() {
    this.myForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      emails: ['john.doe@example.com'],
      selectedOption: 'Option 1',
    });
  }

  patchFormValue() {
    this.myForm.patchValue({
      email: 'john.doe@example.com',
      selectedOption: 'Option 2',
    });
  }
}
