import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService) {

  }

  onHandleAdd() {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log(product)
    })
  }
}
