import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
  @Input() products: IProduct[] = [];
  @Output() onRemove = new EventEmitter<number>();

  removeItem(id: any) {
    this.onRemove.emit(id)
    // this.products = this.products.filter((item) => item._id !== id);
  }
}
