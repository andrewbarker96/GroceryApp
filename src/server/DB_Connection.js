import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const db_uri = process.env.DB_URI;

export default class MongoConnection {
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

  async addGroceryItem(item) {
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

async function run() {
  try {
    const mongoConnection = new MongoConnection();
    
    await mongoConnection.connect();
    const groceryItems = await mongoConnection.getGroceryItems();
    const users = await mongoConnection.getUsers();
    console.log('Grocery Items:', groceryItems);
    console.log('Users:', users);

    await mongoConnection.close();
  } 
  catch (error) {
    console.error('Error:', error);
  }
}

run().catch(console.error);
