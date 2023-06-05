import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  product!: IProduct;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = this.route.snapshot.params['id'];
      console.log(id);
      
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message))
    })
  }
}
