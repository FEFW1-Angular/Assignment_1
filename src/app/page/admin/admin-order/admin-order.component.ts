import { Component } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent {
  orders: IOrder[]=[];
  removedItems: IOrder[]=[];
  constructor(
    private orderService: OrderService,
    ) {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data
    }, error => {
      console.log(error.message)
    })
  }

  removeItem(id: any) {
      this.orderService.deleteOrder(id).subscribe(() => {
        console.log('Delete Success');
        const removedItem = this.orders.find(item => item.id === id);
        if (removedItem) {
          this.removedItems.push(removedItem);
          this.orders = this.orders.filter(item => item.id !== id);
        }
      });
  }

}
