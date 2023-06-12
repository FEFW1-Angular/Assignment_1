import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/Cart';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ICart[] = [];
  private cartItemsKey = 'cartItems';
  private saveCartItems() {
    localStorage.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
  }
  
  constructor() {
    const storedCartItems = localStorage.getItem(this.cartItemsKey);
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  addToCart(product: IProduct) {
    const cartItem = this.cartItems.find(item => item.product._id === product._id);

    if (cartItem) {
      cartItem.quantity++;
      cartItem.product.price = product.price; 
      cartItem.product.name = product.name; 
    } else {
      const newCartItem: ICart = {
        product: product,
        quantity: 1,
        totalPerItem: product.price
      };
      this.cartItems.push(newCartItem);
    }

    this.saveCartItems();
  }

  getCartItems(): ICart[] {
    return this.cartItems;
  }

  updateCartItems(cartItems: ICart[]) {
    this.cartItems = cartItems;
    this.saveCartItems();
  }

}
