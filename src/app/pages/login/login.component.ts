
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  submitted: boolean = false;
  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.http.get<any>("http://localhost:3000/registerusers").subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

        });
        if (user) {
          alert("đăng nhập thành công");
          this.loginForm.reset();
          this.router.navigate(['home'])
        } else {
          alert("tài khoản ko tồn tại");
        }
      }, err => {
        alert("đã sảy ra sự cố!!!")
      })
    }


  }
}
