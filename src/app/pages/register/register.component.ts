
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  submitted: boolean = false;
  // public registerForm !: FormGroup;
  registerForm = this.formbuilder.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    address: ['', [Validators.minLength(5)]],
    phonenumber: ['', [Validators.minLength(10)]],

  }, { validators: this.checkPasswords });



  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  // ngOnInit(): void {
  //   this.registerForm = this.formbuilder.group({
  //     fullname: [''],
  //     email: [''],
  //     password: [''],
  //     confirmpassword: ['']
  //   })
  // }
  register() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.http.post<any>("http://localhost:3000/registerusers", this.registerForm.value).subscribe(res => {
        alert("đăng kí thành công");
        this.registerForm.reset();
        this.router.navigate(['login']);
        console.log("Đăng ký thành công", res)
      }, err => {
        alert("thất bại");
      })
    }

  }
}