import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  credentials = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log('Login submitted:', this.credentials);
    // Goi API
    if (this.form.valid) {

    }
  }
}
