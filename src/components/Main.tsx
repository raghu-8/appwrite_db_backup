"use client";

import { useState } from "react";

import Image from "next/image";
import GetDatabases from "./Forms/GetDatabases/GetDatabases";
import GetDatabasesId from "./Forms/GetDatabasesId/GetDatabasesId";
import styles from "./main.module.css";
import { GetDatabaseProps } from "./Types";
// import GetCollections from "./Forms/GetCollections/GetCollections";

export default function Main() {
  //collections
  const [databases, setDataBases] = useState<GetDatabaseProps[]>([]);
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  //   const [collections, setcollections] = useState<GetDatabaseProps[]>([]);
  //   const [selectedCollections, setSelectedCollections] = useState<string>("");

  console.log(selectedDatabase);

  return (
    <section>
      <div className={styles.title}>
        <Image
          src="/download.svg"
          width={220}
          height={80}
          alt="Picture of the author"
        />
        <p>Database Backup</p>
      </div>

      <GetDatabases setDataBases={setDataBases} />
      {databases && (
        <GetDatabasesId
          databases={databases}
          setSelectedDatabase={setSelectedDatabase}
        />
      )}
      {/* {selectedDatabase && <GetCollections />} */}
    </section>
  );
}
// databases={databases} setDataBases={setDataBases}
