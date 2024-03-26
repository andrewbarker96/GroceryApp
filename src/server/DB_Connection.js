import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_cluster = process.env.DB_CLUSTER;

export const db_uri = `mongodb+srv://${db_username}:${db_password}@${db_host}/?retryWrites=true&w=majority&appName=${db_cluster}`;

class MongoConnection {
  uri = db_uri;

  constructor() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async connect() {
    try {
      await this.client.connect();
      await this.client.db("admin").command({ ping: 1 });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async close() {
    try {
      await this.client.close();
      console.log('Closed MongoDB connection');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
      throw error;
    }
  }

  async getGroceryItems(){
    try {
      const grocery_collection = this.client.db('groceryDB').collection('groceries');

      const cursor = grocery_collection.find();
      const groceryItems = await cursor.toArray();

      return groceryItems;
    } catch (error) {
      console.error('Error fetching grocery items from MongoDB:', error);
      throw error;
    }
  }
  
  async getUsers(){
    try {
      const user_collection = this.client.db('userDB').collection('users');

      const cursor = user_collection.find();
      const users = await cursor.toArray();

      return users;
    } catch (error) {
      console.error('Error fetching users from MongoDB:', error);
      throw error;
    } 
  }
}

export default MongoConnection;

async function run() {
  try {
    const mongoConnection = new MongoConnection();
    
    await mongoConnection.connect();
    const groceryItems = await mongoConnection.getGroceryItems();
    const users = await mongoConnection.getUsers();
    console.log('Grocery Items:', groceryItems);
    console.log('Users:', users);

    await mongoConnection.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

run().catch(console.error);
