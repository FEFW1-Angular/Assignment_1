import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
  products: IProduct[] = [];
  removedProducts: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => {
      console.log(error.message)
    })
  }
  
  removeItem(id: any) {
  this.productService.deleteProduct(id).subscribe(() => {
    console.log('Delete Success');
    const removedProduct = this.products.find(product => product.id === id);
    if (removedProduct) {
      this.removedProducts.push(removedProduct);
      this.products = this.products.filter(product => product.id !== id);
    }
  });
}

  
}
