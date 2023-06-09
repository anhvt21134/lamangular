import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/common/user';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  submitted: boolean = false;
  user!: IUser;
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
  })
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.authService.getUserById(id).subscribe(user => {
        this.user = user;
        // set giá trị từ API vào input form
        this.userForm.patchValue({
          fullname: user.fullname,
          email: user.email,
          password: user.password,
          address: user.address,
          phonenumber: user.phonenumber,
          role: user.role

        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    this.submitted = true
    if (this.userForm.valid) {
      const newUser: IUser = {
        id: this.user.id,
        fullname: this.userForm.value.fullname || '',
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
        address: this.userForm.value.address || '',
        phonenumber: this.userForm.value.phonenumber || '',
        role: this.userForm.value.role || '',
      }
      this.authService.updateUser(newUser).subscribe(user => {
        console.log('Thành công', user)
        this.router.navigate(['admin/users'])
      })
    }
  }
}
