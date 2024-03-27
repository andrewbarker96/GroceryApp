import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_cluster = process.env.DB_CLUSTER;

const db_uri = `mongodb+srv://${db_username}:${db_password}@${db_host}/?retryWrites=true&w=majority&appName=${db_cluster}`;

class GroceryInsert {
    constructor() {
        this.client = new MongoClient(db_uri);
    }

    async insert(item) {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');

            const db = this.client.db('groceryDB');
            const groceries = db.collection('groceries');

            const filter = {name: item.name};

            const update = {
                $set: {
                    name: item.name,
                    price: item.price,
                    image: item.image
                },
            };

            const options = { upsert: true };
            const result = await groceries.updateOne(filter, update, options);

            if (result.upsertedCount === 1) {
                console.log(`Inserted item ${item.name}`);
            } else{
                console.log(`Updated item ${item.name}`);
            }

            await this.client.close();
        } catch (error) {
            console.error('Error inserting item:', error);
            throw error;
        }
    }
}

export default GroceryInsert;

async function run(){
    try {
      const GroceryItem = [
        { name: 'Apple', price: 1.99, image: 'https://via.placeholder.com/150' },
        { name: 'Banana', price: 0.5, image: 'https://via.placeholder.com/150' },
        { name: 'Orange', price: 0.75, image: 'https://via.placeholder.com/150' },
        { name: 'Pear', price: 1.25, image: 'https://via.placeholder.com/150' },
        { name: 'Grapes (3lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
        { name: '2% Milk (1gal)', price: 2.99, image: 'https://via.placeholder.com/150' },
        { name: 'White Bread', price: 4.99, image: 'https://via.placeholder.com/150' },
        { name: 'White Eggs (Dozen)', price: 3.99, image: 'https://via.placeholder.com/150' },
        { name: 'Colby Jack Cheese (8oz)', price: 2.99, image: 'https://via.placeholder.com/150' },
        { name: 'Chicken Breast (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
        { name: 'Ground Beef (1lb)', price: 5.99, image: 'https://via.placeholder.com/150' },
        { name: 'Pork Steak (1lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
        { name: 'Alaskan King Salmon (1lb)', price: 9.99, image: 'https://via.placeholder.com/150' },
        { name: 'Steamed Shrimp (1lb)', price: 12.99, image: 'https://via.placeholder.com/150' },
        { name: 'Maine Lobster (1lb)', price: 20.99, image: 'https://via.placeholder.com/150' },
        { name: 'Crab (1lb)', price: 15.99, image: 'https://via.placeholder.com/150' },
        { name: 'Butter (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
        { name: 'Pure Cane Sugar (5lb)', price: 8.99, image: 'https://via.placeholder.com/150' },
        { name: 'Bleached Flour (5lb)', price: 7.99, image: 'https://via.placeholder.com/150' },
        { name: 'Jasmine Rice (5lb)', price: 10.99, image: 'https://via.placeholder.com/150' },
        { name: 'Spaghetti Noodles (1lb)', price: 1.99, image: 'https://via.placeholder.com/150' },
    ];

    for (const item of GroceryItem) {
        await new GroceryInsert().insert(item);

    }
    } catch (error) {
        console.error('Error:', error);
    }
}

run().catch(console.error);