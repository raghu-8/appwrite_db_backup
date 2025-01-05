import React from "react";
import styles from "./styles.module.css";

export default function DocumentsManager({
  documents,
}: {
  documents: unknown[];
}) {
  const handleSubmit = async () => {
    const fileData = JSON.stringify(documents, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "documents.json";
    link.click();
  };

  return (
    <section className={styles.wrapper}>
      {documents.length > 1 && (
        <button onClick={() => handleSubmit()}>Download Data</button>
      )}
    </section>
  );
}
