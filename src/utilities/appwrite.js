import { Client, Databases } from "node-appwrite";

const appwriteClient = new Client()
  .setEndpoint(process.env.DB_ENDPOINT) // Your Appwrite endpoint
  .setProject(process.env.DB_PROJECT_ID) // Your project ID
  .setKey(process.env.DB_KEY); // Your API Key

export { appwriteClient };
