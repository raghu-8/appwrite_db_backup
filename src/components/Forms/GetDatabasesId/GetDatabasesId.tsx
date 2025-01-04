import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import { GetDatabaseProps } from "@/components/Types";

export default function GetDatabasesId({
  databases,
  setSelectedDatabase,
}: {
  databases: GetDatabaseProps[];
  setSelectedDatabase: Dispatch<SetStateAction<string>>;
}) {
  const handleSubmit = (id: string) => {
    if (id) {
      setSelectedDatabase(id);
    }
  };
  return (
    <section className={styles.wrapper}>
      {databases.map((database, index) => {
        return (
          <div key={index} onClick={() => handleSubmit(database.$id)}>
            {database.name}
          </div>
        );
      })}
    </section>
  );
}
