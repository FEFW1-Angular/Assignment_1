import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from 'src/app/interfaces/Cart';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {
  totalQuantity: number = 0;
  totalPrice: number = 0;
  cartItems: ICart[] = [];
  orderForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    diachi: ['', [Validators.required]],
    email: ['', [Validators.required]],
    sdt: [0],
    ghichu: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cartItems = JSON.parse(params['cartItems']);
      this.totalQuantity = params['totalQuantity'];
      this.totalPrice = params['totalPrice'];
    });
  }

  onHandleSubmit() {
    if (this.orderForm.valid) {
      const order: IOrder = {
        name: this.orderForm.value.name || '',
        diachi: this.orderForm.value.diachi || '',
        email: this.orderForm.value.email || '',
        sdt: this.orderForm.value.sdt || 0,
        ghichu: this.orderForm.value.ghichu || '',
        cartbill: this.cartItems,
        totalPrice: this.totalPrice,
        
      };

      this.orderService.addOrder(order).subscribe(data => {
        console.log('Thành công', data);
        alert('Cảm ơn bạn đã đăt hàng, đơn hàng của bạn đang được sử lí ');
        
        this.router.navigate(['/home']);
        
      });
    }
  }
}
