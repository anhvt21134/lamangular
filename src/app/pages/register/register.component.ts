import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmpassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmpassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmpassword')?.setErrors(null);
    }
  }
  user = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Registration submitted:', this.user);
    // Goi API
    if (this.form.valid) {

    }

  }
}