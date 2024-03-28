const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

class Groceries {
    
    async addItem(name, price, image) {
        try {
            // Check if the item already exists
            const { data: existingItems, error: fetchError } = await client
                .from('groceries')
                .select('id')
                .eq('name', name);

            if (fetchError) throw fetchError;

            // If item already exists, do not proceed
            if (existingItems && existingItems.length > 0) {
                console.log(`Updating Item ${name}`);
                const { error: updateError } = await client
                    .from('groceries')
                    .update({ price, image })
                    .eq('name', name);
                return;
            }
        

            // Add the item if name doesn't exist
            const { error: insertError } = await client
                .from('groceries')
                .insert({name, price, image})
                .single();

            if (insertError) throw insertError;

            console.log(`${name} added successfully`);
        } catch (error) {
            console.error('Error adding item:', error.message);
            throw error;
        }
    }

}

async function run() {
    try {
        const user = new Groceries();
        await user.addItem('Frozen Pepperoni Pizza', 10.99, 'https://via.placeholder.com/150');
    } catch (error) {
        console.error('Error:', error);
    }
}

// async function run(){
//     try {
//       const GroceryItem = new addItem();
//       [
//         { name: 'Apple', price: 1.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Banana', price: 0.5, image: 'https://via.placeholder.com/150' },
//         { name: 'Orange', price: 0.75, image: 'https://via.placeholder.com/150' },
//         { name: 'Pear', price: 1.25, image: 'https://via.placeholder.com/150' },
//         { name: 'Grapes (3lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
//         { name: '2% Milk (1gal)', price: 2.99, image: 'https://via.placeholder.com/150' },
//         { name: 'White Bread', price: 4.99, image: 'https://via.placeholder.com/150' },
//         { name: 'White Eggs (Dozen)', price: 3.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Colby Jack Cheese (8oz)', price: 2.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Chicken Breast (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Ground Beef (1lb)', price: 5.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Pork Steak (1lb)', price: 4.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Alaskan King Salmon (1lb)', price: 9.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Steamed Shrimp (1lb)', price: 12.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Maine Lobster (1lb)', price: 20.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Crab (1lb)', price: 15.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Butter (1lb)', price: 3.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Pure Cane Sugar (5lb)', price: 8.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Bleached Flour (5lb)', price: 7.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Jasmine Rice (5lb)', price: 10.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Spaghetti Noodles (1lb)', price: 1.99, image: 'https://via.placeholder.com/150' },
//         { name: 'Alfredo Sauce (24oz)', price: 5.99, image: 'https://via.placeholder.com/150' },
//     ];

//     for (const item of GroceryItem) {
//         const { error: insertError } = await client
//             .from('groceries')
//             .insert([item])
//             .single();

//         if (insertError) throw insertError;

//         console.log("Item added successfully for", item.name);
        
//     }
// } catch (error) {
//     console.error('Error adding item:', error.message);
//     throw error;
// }
// }

run().catch(console.error);