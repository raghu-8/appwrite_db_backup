import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
interface GetDatabasesProps {
  databases: any[]; // Replace `any` with the appropriate type for your database items
  setDataBases: Dispatch<SetStateAction<any[]>>; // Same for setDataBases' type
}

async function getAllDatabases() {
  // try {
  //   const response = await databases.;
  //   console.log(response); // Log the response to view the databases
  // } catch (error) {
  //   console.error("Error fetching databases:", error);
  // }
}

const GetDatabases = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    getAllDatabases();
  }, []);

  return (
    <form>
      <div>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Get Databases" />
      </div>
    </form>
  );
};
export default GetDatabases;
