import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}
  // 加入商品至購物車
  addToCart(product: Product) {
    this.items.push(product);
  }
  // 取得購物車內容
  getItems() {
    return this.items;
  }
  // 清空購物車
  clearCart() {
    this.items = [];
    return this.items;
  }
  // 取得運費價格
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
