import React, { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./styles.module.css";
import { GetCollectionProps } from "@/components/Types";

const GetCollections = ({
  collections,
  selectedCollections,
  setSelectedCollections,
}: {
  collections: GetCollectionProps[];
  selectedCollections: string;
  setSelectedCollections: Dispatch<SetStateAction<string>>;
}) => {
  const handleDocuments = async (id: string) => {
    if (id) {
      try {
        const response = await fetch(
          `/api/getdocuments/?dbid=${collections[0].$id}&collid=${id}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        console.log(data.data.documents);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };
  useEffect(() => {
    if (selectedCollections) {
      handleDocuments(selectedCollections);
    }
  }, [selectedCollections]);
  return (
    <section className={styles.wrapper}>
      {collections.map((collection) => {
        return (
          <div
            key={collection.$id}
            className={
              collection.$id == selectedCollections ? styles.active : ""
            }
            onClick={() => setSelectedCollections(collection.$id)}
          >
            {collection.name}
          </div>
        );
      })}
    </section>
  );
};
export default GetCollections;
