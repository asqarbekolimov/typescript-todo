import { ChangeEvent, useState } from "react";
import { IData } from ".";
import { data } from "./constatnts";
import styles from "./home.module.css";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const handlerInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handlerSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description",
    };
    console.log(newData);
    setArr([...arr, newData]);
    setTitle("");
  };

  const deletItem = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>
      <input
        type="text"
        value={title}
        placeholder="Enter todo"
        className={styles.input}
        onChange={handlerInput}
      />
      <button onClick={handlerSubmit} className={styles.button}>
        Add Todo
      </button>

      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.itemCard}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deletItem(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
