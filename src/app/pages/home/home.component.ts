import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/datas/mockData';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any[] | undefined;
  constructor(private productService: ProductService, private router: Router) { }
  searchtext:any;
  p: number = 1;
  itemsPerPage = 3;
  totalProduct:any;
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.totalProduct = response.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewDetail(productId: number) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['/deltail', productId]);
  }
}
