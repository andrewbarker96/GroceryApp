// Define the Grocery class
class Grocery {
    name: string;
    quantity: number;
    price: number;
    total: number;

    constructor(name: string, quantity: number, price:number, total:number = 0.00) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.total = price * quantity;

    }
}

class Total {
    total: number;

    constructor(total: number) {
        this.total = total;
    }
}

// Create an array of grocery items
let groceries: Grocery[] = [
    new Grocery('2% Milk', 3, 2.99),
    new Grocery('Bread', 6, 3.99),
    new Grocery('Broccoli', 2, 2.99),
    new Grocery('Butter', 2, 4.99),
    new Grocery('Carrots', 2, 1.99),
    new Grocery('Chicken Breast', 3, 7.99),
    new Grocery('Colby Jack Shredded Cheese', 1, 3.99),
    new Grocery('Ground Beef', 2, 5.99),
    new Grocery('Green Beans', 2, 2.99),
    new Grocery('Marinara Sauce', 4, 5.99),
    new Grocery('Penne Pasta', 2, 2.99),
    new Grocery('Pork Chops', 2, 8.99),
    new Grocery('Potatoes', 5, 3.99),
    new Grocery('Salmon', 1, 9.99),
    new Grocery('Spaghetti', 2, 2.99),
    new Grocery('Tilapia', 1, 7.99),
    new Grocery('White Eggs', 11, 1.99),
];

let total: number = 0;
groceries.forEach(grocery => {
    total += grocery.total;
});

// Define the GroceryItem class
class GroceryItem {
    name: string;
    quantity: number;
    price: number;
    total: number;
    image: string;

    constructor(name: string, quantity: number, price:number, image: string, total:number = 0.00) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
        this.total = price * quantity;
    }
}

export { Grocery, GroceryItem, groceries, total };
