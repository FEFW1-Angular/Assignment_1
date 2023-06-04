import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
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
    private formBuilder: FormBuilder
  ) {}

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
  });
  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
      };
      this.productService.addProduct(product).subscribe((product) => {
        console.log('Thành công', product);
      });
    }
  }
}
