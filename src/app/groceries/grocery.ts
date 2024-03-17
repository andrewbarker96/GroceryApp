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
    new Grocery('White Eggs', 11, 1.99),
    new Grocery('Butter', 2, 4.99),
    new Grocery('Colby Jack Shredded Cheese', 1, 3.99),
    new Grocery('Marinara Sauce', 4, 5.99),
];

let total: number = 0;
groceries.forEach(grocery => {
    total += grocery.total;
});

export { Grocery, groceries, total };
