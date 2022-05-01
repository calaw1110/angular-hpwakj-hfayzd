import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  // 取得購物車清單
  items = this.cartService.getItems();
  // 建立一個表單模型
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  ngOnInit() {
    console.log(this.items);
  }

  // 重製表單以及清空購物車
  onSubmit(): void {
    if (this.items.length != 0) {
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    } else {
      window.alert('this cart dosent have any products,Plz add some products');
    }
  }
}
