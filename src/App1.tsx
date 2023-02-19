import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
interface abc {
  a: number;
  b: string;
}
const AppTSX = () => {
  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    async function gettodo() {
      let res = await axios.get("https://retoolapi.dev/4ibaLX/data");
      console.log(res.data);
      setListTodo(res.data);
    }
    gettodo();
  }, []);

  let a: abc = { a: 1, b: "test" };
  console.log("a interface", a);
  return (
    <div className="todo-container">
      <input type={"text"} />
      <ul className="listTodo">
        {listTodo.length > 0 &&
          listTodo.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default AppTSX;
