import React, { Dispatch, SetStateAction } from "react";
// import { useState } from "react";
import styles from "./styles.module.css";
import { GetDatabaseProps } from "@/components/Types";
// interface formProps {
//   endpoint: string;
//   projectId: string;
//   key: string;
// }

const GetDatabases = ({
  setDataBases,
}: {
  setDataBases: Dispatch<SetStateAction<GetDatabaseProps[]>>;
}) => {
  // const [form, setForm] = useState<formProps>({
  //   endpoint: "",
  //   projectId: "",
  //   key: "",
  // });

  async function getAllDatabases(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (!form.endpoint || !form.projectId || !form.key) {
    //   alert("fill all the details");
    //   return;
    // }

    try {
      const response = await fetch("/api/getdatabases");

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.status == "failed") {
        alert(data.message);
        return;
      }
      if (data.status == "success") {
        setDataBases(data.data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setForm((prevValue) => {
  //     return { ...prevValue, [name]: value };
  //   });
  // };
  return (
    <form className={styles.form} onSubmit={(e) => getAllDatabases(e)}>
      {/* <div>
        <label>Endpoint</label>
        <input
          type="text"
          value={form.endpoint}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Project ID</label>
        <input
          type="text"
          value={form.projectId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Key</label>
        <input type="text" value={form.key} onChange={(e) => handleChange(e)} />
      </div> */}
      <div>
        <input type="submit" value="Get Databases" className="btn" />
      </div>
    </form>
  );
};
export default GetDatabases;
