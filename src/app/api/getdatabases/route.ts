import { NextResponse } from "next/server";
import { appwriteClient } from "@/utilities/appwrite";
import { Databases } from "node-appwrite";
export const GET = async () => {
  try {
    if (
      !process.env.DB_ENDPOINT ||
      !process.env.DB_PROJECT_ID ||
      !process.env.DB_KEY
    ) {
      return new NextResponse(
        JSON.stringify({ status: "failed", message: "Missing env variable" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }, // Set the content type
        }
      );
    }

    // const payload = await request.json();

    // if (!payload) {
    //   throw new Error(`Error: datais required`);
    // }
    const databases = new Databases(appwriteClient);
    const result = await databases.list();

    return new NextResponse(
      JSON.stringify({ status: "success", data: result?.databases }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }, // Set the content type
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ status: "failed", error: error }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }, // Set the content type
      }
    );
  }
};
