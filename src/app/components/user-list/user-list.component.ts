import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: IUser[] = [];
  constructor(private authService: AuthService, private router: Router) {
    this.authService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error.message)
    );
  }

  removeItem(id: any) {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      this.authService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(item => item.id !== id)
        alert("Bạn đã xóa thành công")
      }, (error) => {
        console.log(error.message)
      })
    }

  }

  viewUpdate(id: any) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['admin/users/update', id]);
  }
}
