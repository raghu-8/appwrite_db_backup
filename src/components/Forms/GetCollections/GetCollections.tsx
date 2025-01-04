import React, { Dispatch, SetStateAction } from "react";
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
