import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  products: IProduct[] = [];
  categorys: ICategory[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error.message);
      }
    );

    this.categoryService.getCategorys().subscribe(
      (data) => {
        this.categorys = data;
        console.log(this.categorys);
        
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
