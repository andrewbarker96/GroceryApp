import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_cluster = process.env.DB_CLUSTER;

const db_uri = `mongodb+srv://${db_username}:${db_password}@${db_host}/?retryWrites=true&w=majority&appName=${db_cluster}`;

async function run() {
    const uri = db_uri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const db = client.db('groceryDB');
        const groceries = db.collection('groceries');

        const GroceryItem = [
            { sku: 1001, name: 'Apple', price: 1.99, image: 'https://via.placeholder.com/150' },
            { sku: 1002, name: 'Banana', price: 0.5, image: 'https://via.placeholder.com/150' },
            { sku: 1003, name: 'Orange', price: 0.75, image: 'https://via.placeholder.com/150' },
            { sku: 1004, name: 'Pear', price: 1.25, image: 'https://via.placeholder.com/150' },
            { sku: 1005, name: 'Grapes (3lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
            { sku: 1006, name: '2% Milk (1gal)', price: 2.99, image: 'https://via.placeholder.com/150' },
            { sku: 1007, name: 'White Bread', price: 4.99, image: 'https://via.placeholder.com/150' },
            { sku: 1008, name: 'White Eggs (dozen)', price: 3.99, image: 'https://via.placeholder.com/150' },
            { sku: 1009, name: 'Colby Jack Cheese (8oz)', price: 2.99, image: 'https://via.placeholder.com/150' },
            { sku: 1010, name: 'Chicken Breast (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
            { sku: 1011, name: 'Ground Beef (1lb)', price: 5.99, image: 'https://via.placeholder.com/150' },
            { sku: 1012, name: 'Pork Chops (1lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
            { sku: 1013, name: 'Salmon (1lb)', price: 9.99, image: 'https://via.placeholder.com/150' },
            { sku: 1014, name: 'Shrimp (1lb)', price: 12.99, image: 'https://via.placeholder.com/150' },
            { sku: 1015, name: 'Lobster (1lb)', price: 20.99, image: 'https://via.placeholder.com/150' },
            { sku: 1016, name: 'Crab (1lb)', price: 15.99, image: 'https://via.placeholder.com/150' },
            { sku: 1017, name: 'Butter (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
            { sku: 1018, name: 'Sugar (5lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
            { sku: 1019, name: 'Flour (5lb)', price: 2.99, image: 'https://via.placeholder.com/150' },
            { sku: 1020, name: 'Rice (5lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
        ];

        // Insert or update grocery items
        for (const item of GroceryItem) {
            const filter = { sku: item.sku };
            
            const update = {
                $set: {
                    sku: item.sku,
                    name: item.name,
                    price: item.price,
                    image: item.image
                },
            };

            const options = { upsert: true };
            const result = await groceries.updateOne(filter, update, options);

            if (result.upsertedCount === 1) {
                console.log(`Inserted item ${item.sku} ${item.name}`);
            } else{
                console.log(`Updated item ${item.sku} ${item.name}`);
            }
        }

    } finally {
        await client.close();
    }
}

run().catch(console.error);