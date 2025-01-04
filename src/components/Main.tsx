"use client";

import { useState } from "react";
// import GetDatabases from "./Forms/GetDatabases";
import Image from "next/image";
import GetDatabases from "./Forms/GetDatabases";
import styles from "./main.module.css";

export default function Main() {
  const [databases, setDataBases] = useState([]);
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

      <GetDatabases />
    </section>
  );
}
// databases={databases} setDataBases={setDataBases}
