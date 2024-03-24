import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Grocery, groceries, total } from './grocery';

interface GroceryItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GroceriesPage implements OnInit {
  groceriesList: Grocery[] = groceries;
  groceriesTotal: number = total;
  groceryItems: GroceryItem[] = []; // Initialize your groceryItems array

  constructor() { }

  ngOnInit() {
    // Convert your groceriesList to groceryItems
    this.groceryItems = this.groceriesList.map(grocery => ({
      name: grocery.name,
      price: grocery.price,
      quantity: 1, // Default quantity
      total: grocery.price, // Default total
      image: '', // Default image, replace with actual image path
    }));
  }

  addToCart(groceryItem: GroceryItem) {
    // Implement your add to cart logic here
  }
}