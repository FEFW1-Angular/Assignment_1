import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent {
  // product: IProduct = {
  //   name: "",
  //   price: 0,
  //   img: ""
  // }
  // constructor(
  //   private productService: ProductService,
  //   private route: ActivatedRoute) {
  //   this.route.paramMap.subscribe(param => {
  //     const id = Number(param.get('id'));
  //     this.productService.getProductById(id).subscribe(product => {
  //       this.product = product;
  //     }, error => console.log(error.message))
  //   })
  // }
  // onHandleUpdate() {
  //   this.productService.updateProduct(this.product).subscribe(product => {
  //     console.log(product)
  //   })
  // }

  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0,],
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
          price: product.price
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    if (this.productForm.valid) {
      const newProduct: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.updateProduct(newProduct).subscribe(product => {
        console.log(product)
      })
    }
  }
}
