import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  submitted: boolean = false;
  productForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(255)],
    ],
    price: [0, [Validators.required, Validators.min(1)]],
    price_sale: [0, [Validators.required, Validators.min(1)]],
    description: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(255)],
    ],
    quanlity: [0, [Validators.required, Validators.min(1)]],
    image: ['']

  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
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
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        price_sale: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        quanlity: this.productForm.value.quanlity || 0,
        image: this.productForm.value.image || ''
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log('Thành công', product)
        this.router.navigate(['admin/products'])
      })
    }
  }
}
