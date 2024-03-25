import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_cluster = process.env.DB_CLUSTER;

const db_uri = `mongodb+srv://${db_username}:${db_password}@${db_host}/?retryWrites=true&w=majority&appName=${db_cluster}`;

const uri = db_uri;

// Function to fetch grocery items from MongoDB
async function fetchGroceryItems() {
  try {
      // Connect to MongoDB
      const client = new MongoClient(uri);
      await client.connect();
      console.log('Connected to MongoDB');

      // Access the groceryDB database and the groceries collection
      const grocery_collection = client.db('groceryDB').collection('groceries');

      // Get all grocery items
      const cursor = grocery_collection.find();
      const groceryItems = await cursor.toArray();

      // Close the connection
      await client.close();

      return groceryItems;

      // Handle errors
    } catch (error) {
      console.error('Error fetching grocery items from MongoDB:', error);
      throw error;
  }
}

async function main() {
  try {
    // Call fetchGroceryItems function to fetch grocery items from MongoDB
    const groceryItems = await fetchGroceryItems();
    
    // Log the fetched grocery items
    console.log('Fetched Grocery Items:', groceryItems);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function to start fetching grocery items
main();

// Export the fetchGroceryItems function
export default fetchGroceryItems;