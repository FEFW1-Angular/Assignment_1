import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent {
  products: IProduct[] = [];
  removedProducts: IProduct[] = [];
  categorys: ICategory[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private http: HttpClient
  ) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
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

  removeItem(_id: any) {
    this.productService.deleteProduct(_id).subscribe(() => {
        console.log('Delete Success');
        const removedProduct = this.products.find(
          (product) => product._id === _id
        );
        if (removedProduct) {
          this.removedProducts.push(removedProduct);
          this.products = this.products.filter(
            (product) => product._id !== _id
          );
        }
      },
      (error) => {
        console.log(error);
        alert(error.error.message); // Hiển thị message từ server
      }
    );
  }

  getCategoryName(categoryId: string | undefined) {
    const categorys = this.categorys.find((cate) => cate._id == categoryId);
    if (categorys) {
      return categorys.name;
    }
    return '';
  }
}
