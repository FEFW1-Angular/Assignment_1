import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent {
  categorys: ICategory[] = [];
  products: IProduct[] = []; // Danh sách sản phẩm
  searchQuery: string = ""
  constructor(
    private categoryService: CategoryService,
     private router: Router,
     private productService: ProductService
    ) {
    this.categoryService.getCategorys().subscribe(data => {
      this.categorys = data
    }, error => {
      console.log(error.message)
    })
  }
  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }

  search(){
    console.log(this.searchQuery);
    this.productService.searchProduct(this.searchQuery.trim()).subscribe(res => {
      
        // this.router.navigate(['/category']);
      console.log(res)
      
    })
    
   }

  

}
