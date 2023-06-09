import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent {
  category!: ICategory;
  products: IProduct[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
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

    this.route.paramMap.subscribe((param) => {
      const id = this.route.snapshot.params['id'];
      console.log(id);

      this.categoryService.getCategoryById(id).subscribe(
        (category) => {
          this.category = category;
          console.log(this.category);
        },
        (error) => console.log(error.message)
      );
    });
  }

  getProductsByCategoryId(categoryId: string|undefined): IProduct[] {
    if (categoryId) {
      return this.products.filter(product => product.categoryId === categoryId);
    } else {
      return [];
    }
  }
}
