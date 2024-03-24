import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Grocery, groceries } from '../groceries/grocery'; // Import Grocery and groceries

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CartPage implements OnInit {
  cartItems: Grocery[] = groceries; // Use groceries array as cartItems
  totalPrice: number = 0; // Initialize totalPrice

  constructor() { }

  ngOnInit() {
    // Calculate total price
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.total, 0);
  }

  removeFromCart(index: number) {
    // Remove item from cart
    this.cartItems.splice(index, 1);

    // Recalculate total price
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.total, 0);
  }
}