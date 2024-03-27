import { MongoClient } from "mongodb";

class FetchGrocery {
  name: string;
  price: number;
  image: string;

  constructor(name: string, price: number, image: string) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

  static async fetchFromDatabase(): Promise<FetchGrocery[]> {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    let groceries: FetchGrocery;
    try {
      await client.connect();

      const database = client.db("groceryDB");
      const collection = database.collection("groceries");

      const result = await collection.find().toArray();

      return result.map((item: any) => {
        return new FetchGrocery(item.name, item.price, item.image);
      });
    } catch (error) {
      console.error("Error fetching groceries from database:", error);
      return [];
    } finally {
      await client.close();
    }
  }
}

export { FetchGrocery };