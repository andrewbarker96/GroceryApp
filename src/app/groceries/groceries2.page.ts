import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Grocery, groceries, total } from "./grocery";
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGroceryItems();
  }

  fetchGroceryItems() {
    this.http.get<any[]>("http://localhost:3000/groceryItems").subscribe(
      (data) => {
        this.groceryItems = data.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: 1, // Default quantity
          total: item.price, // Default total
          image: item.image, // Assuming your MongoDB document contains an 'image' field
        }));
      },
      (error) => {
        console.error("Error fetching grocery items:", error);
      }
    );
  }

  addToCart(groceryItem: GroceryItem) {
    // Implement your add to cart logic here
  }
}
