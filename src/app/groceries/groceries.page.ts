import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Grocery, groceries, total,} from './grocery';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GroceriesPage {
  groceriesList: Grocery[] = groceries;
  groceriesTotal: number = total;
}