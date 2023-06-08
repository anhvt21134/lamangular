import { Component } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }

  removeItem(id: any) {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
        alert("Bạn đã xóa thành công")
      }, (error) => {
        console.log(error.message)
      })
    }

  }

  viewUpdate(id: any) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['admin/products/update', id]);
  }
}
