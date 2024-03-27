import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FetchGrocery } from "./groceries";

interface GroceryItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ShopPage implements OnInit {
  groceryItems: GroceryItem[] = [];
  constructor() {}

  ngOnInit() {
    FetchGrocery.fetchFromDatabase().then((groceries) => {
      this.groceryItems = groceries.map((grocery) => ({
        name: grocery.name,
        price: grocery.price,
        quantity: 1,
        total: grocery.price,
        image: grocery.image,
      }));
    });
  }
}
