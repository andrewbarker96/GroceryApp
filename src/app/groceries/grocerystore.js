const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

class GroceryStoreItems {
  async getItems() {
    const db_uri = process.env.DB_URI;
    const client = new MongoClient(db_uri);
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      const db = client.db('groceryDB');
      const groceries = db.collection('groceries');

      const items = await groceries.find().toArray();

      const formattedItems = items.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: 1,
        total: item.price,
        image: item.image
      }));

      console.log('Fetched grocery items:', formattedItems);
      return formattedItems;
    } catch (error) {
      console.error('Error fetching grocery items:', error);
      throw error;
    } finally {
      await client.close();
    }
  }
}

async function run() {
  try {
    const groceryItems = new GroceryStoreItems();
    await groceryItems.getItems();
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
