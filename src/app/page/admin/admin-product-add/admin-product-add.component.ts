import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interfaces/Category';
@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
})
export class AdminProductAddComponent {
  categorys: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategorys().subscribe(
      (data) => {
        this.categorys = data;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: [''],
    category: [''],
  });
  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        img: this.productForm.value.img || '',
        price: this.productForm.value.price || 0,
        categoryId: this.productForm.value.category || '',
      };
      this.productService.addProduct(product).subscribe((product) => {
        console.log('Thành công', product);
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
