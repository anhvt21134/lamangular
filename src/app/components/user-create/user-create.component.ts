import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  submitted: boolean = false;
  userForm = this.formBuilder.group({
    fullname: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(25)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address: ['', [Validators.minLength(5)]],
    phonenumber: ['', [Validators.minLength(10)]],
    role: ['', [Validators.required]]

  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  onHandleSubmit() {
    // const product: IProduct = {

    //   name: this.productForm.value.name || '',
    //   price: this.productForm.value.price || 0,
    //   price_sale: this.productForm.value.price || 0,
    //   description: this.productForm.value.name || '',
    //   quanlity: this.productForm.value.price || 0,
    //   image: this.productForm.value.name || ''
    // };
    this.submitted = true;
    if (this.userForm.valid) {
      const user: IUser = {
        fullname: this.userForm.value.fullname || '',
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
        address: this.userForm.value.address || '',
        phonenumber: this.userForm.value.phonenumber || '',
        role: this.userForm.value.role || '',
      }
      this.authService.addUser(user).subscribe(user => {
        alert("Thêm thành công")
        this.router.navigate(['admin/users'])
      }, err => {
        alert("thất bại");
      })
    }
  }
}
