import { Component } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  submitted: boolean = false;
  product!: IProduct;
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
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        // set giá trị từ API vào input form
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          price_sale: product.price_sale,
          description: product.description,
          quanlity: product.quanlity,
          image: product.image

        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    this.submitted = true
    if (this.productForm.valid) {
      const newProduct: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        price_sale: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        quanlity: this.productForm.value.quanlity || 0,
        image: this.productForm.value.image || ''
      }
      this.productService.updateProduct(newProduct).subscribe(product => {
        console.log('Thành công', product)
      })
    }
  }
}
