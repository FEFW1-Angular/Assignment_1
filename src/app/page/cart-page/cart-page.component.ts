import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ICart } from 'src/app/interfaces/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartItems: ICart[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;
  constructor(
    private cartService: CartService,
    private router: Router
  ){
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotals();
  }
  calculateTotals() {
    this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartItems.forEach(item => item.totalPerItem = item.quantity * item.product.price);
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);
  }
  removeCartItem(cartItem: ICart) {
    const index = this.cartItems.indexOf(cartItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotals();
      this.cartService.updateCartItems(this.cartItems);
    }
  }
  updateCartItem(cartItem: ICart) {
    if (cartItem.quantity >= 0) {
      this.calculateTotals();
      this.cartService.updateCartItems(this.cartItems);
    }
  }
  navigateToBillPage() {
    this.router.navigate(['/carts/bill'], {
      queryParams: {
        cartItems: JSON.stringify(this.cartItems),
        totalQuantity: this.totalQuantity,
        totalPrice: this.totalPrice,
      }
    });
  }
  
}
