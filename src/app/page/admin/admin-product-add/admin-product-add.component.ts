import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
})
export class AdminProductAddComponent {
  constructor(
    private productService: ProductService,
    private router:Router,
    private formBuilder: FormBuilder
  ) {}

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: [''],
  });
  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        img: this.productForm.value.img || '',
        price: this.productForm.value.price || 0,
      };
      this.productService.addProduct(product).subscribe((product) => {
        console.log('Thành công', product);
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
