import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Grocery, groceries, total } from "./grocery";

interface GroceryItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

@Component({
  selector: "app-groceries",
  templateUrl: "./groceries.page.html",
  styleUrls: ["./groceries.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class GroceriesPage implements OnInit {
  groceriesList: Grocery[] = groceries;
  groceriesTotal: number = total;
  groceryItems: GroceryItem[] = []; // Initialize your groceryItems array

  constructor() {}

  ngOnInit() {
    this.groceryItems = this.groceriesList.map((grocery) => ({
      name: grocery.name,
      price: grocery.price,
      quantity: 1, // Default quantity
      total: grocery.price, // Default total
      image: "", // Default image, replace with actual image path
    }));
  }

  addToCart(groceryItem: GroceryItem) {
    const item = this.groceryItems.find(
      (item) => item.name === groceryItem.name
    );
    if (item) {
      item.quantity += 1;
      item.total = item.price * item.quantity;
    } else {
      this.groceryItems.push({
        ...groceryItem,
        quantity: 1,
        total: groceryItem.price,
        image: `assets/${groceryItem.name.toLowerCase().replace(" ", "-")}.jpg`,
      });
    }
    this.groceriesTotal += groceryItem.price;
  }

  removeFromCart(groceryItem: GroceryItem) {
    const item = this.groceryItems.find(
      (item) => item.name === groceryItem.name
    );
    if (item) {
      item.quantity -= 1;
      item.total = item.price * item.quantity;
      this.groceriesTotal -= groceryItem.price;
    }
  }

  getCartTotal() {
    return this.groceryItems.reduce((total, item) => total + item.total, 0);
  }

  clearCart() {
    this.groceryItems = [];
    this.groceriesTotal = 0;
  }

  checkout() {}
}
