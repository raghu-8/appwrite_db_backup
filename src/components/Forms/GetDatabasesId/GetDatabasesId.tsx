import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import { GetCollectionProps, GetDatabaseProps } from "@/components/Types";

export default function GetDatabasesId({
  databases,
  setCollections,
  collections,
}: {
  databases: GetDatabaseProps[];
  setCollections: Dispatch<SetStateAction<GetCollectionProps[]>>;
  collections: GetCollectionProps[];
}) {
  const handleSubmit = async (id: string) => {
    if (id) {
      try {
        const response = await fetch(`/api/getcollections/?dbid=${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status == "success") {
          setCollections(data.data.collections);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };
  console.log(collections);
  console.log(databases);

  return (
    <section className={styles.wrapper}>
      {databases.map((database, index) => {
        return (
          <div
            key={index}
            onClick={() => handleSubmit(database.$id)}
            className={
              databases[0]?.$id == collections[0]?.databaseId
                ? styles.active
                : ""
            }
          >
            {database.name}
          </div>
        );
      })}
    </section>
  );
}
