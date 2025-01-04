import { NextResponse } from "next/server";
import { appwriteClient } from "@/utilities/appwrite";
import { Databases } from "node-appwrite";
export const POST = async () => {
  try {
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
