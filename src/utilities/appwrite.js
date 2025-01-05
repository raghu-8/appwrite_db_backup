import { Client } from "node-appwrite";

const appwriteClient = new Client()
  .setEndpoint(process.env.DB_ENDPOINT) // Your Appwrite endpoint
  .setProject(process.env.DB_PROJECT_ID) // Your project ID
  .setKey(process.env.DB_KEY); // Your API Key

function appwriteClientFunction(endpoint, projectId, key) {
  const appwriteClient = new Client()
    .setEndpoint(endpoint) // Your Appwrite endpoint
    .setProject(projectId) // Your project ID
    .setKey(key); // Your API Key

  return appwriteClient;
}
export { appwriteClient, appwriteClientFunction };
