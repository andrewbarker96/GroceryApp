import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { createClient } from "@supabase/supabase-js";
const dotenv = require("dotenv");
dotenv.config();

const SUPABASE_URL = process.env["SUPABASE_URL"] || "";
const SUPABASE_KEY = process.env["SUPABASE_KEY"] || "";

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

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

  ngOnInit() {}
}
