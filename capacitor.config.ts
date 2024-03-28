import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.grocerystore.app",
  appName: "GroceryApp",
  webDir: "www/browser",
  server: {
    androidScheme: "https",
  },
};

export default config;
