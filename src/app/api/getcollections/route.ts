import { NextResponse, NextRequest } from "next/server";
import { appwriteClient } from "@/utilities/appwrite";
import { Databases } from "node-appwrite";
export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const selectedDbId = searchParams.get("dbid");

    if (selectedDbId) {
      const databases = new Databases(appwriteClient);
      const result = await databases.listCollections(selectedDbId);

      return new NextResponse(
        JSON.stringify({ status: "success", data: result }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }, // Set the content type
        }
      );
    }
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