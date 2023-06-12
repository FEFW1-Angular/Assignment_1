import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.scss']
})
export class AdminOrderDetailComponent {
 order!: IOrder;
 constructor(
  private orderService: OrderService,
  private route: ActivatedRoute
 ){
  this.route.paramMap.subscribe(param => {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    
    this.orderService.getOrderById(id).subscribe(data => {
     this.order = data;
    }, error => console.log(error.message))
  })
 }
}
