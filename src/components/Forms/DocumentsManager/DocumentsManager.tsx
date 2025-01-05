import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import { GetCollectionProps, GetDatabaseProps } from "@/components/Types";

export default function DocumentsManager({
  documents,
}: {
  documents: unknown[];
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
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  return (
    <section className={styles.wrapper}>
      {documents.map((document, index) => {
        return <div key={index}>{document.customerName}</div>;
      })}
    </section>
  );
}
