import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
   this.productService.getProducts().subscribe(data => {
     this.products = data
   }, error => {
     console.log(error.message)
   })
 }
}