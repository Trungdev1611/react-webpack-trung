import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    async function gettodo() {
      let res = await axios.get("https://retoolapi.dev/4ibaLX/data");
      console.log(res.data);
      setListTodo(res.data);
    }
    gettodo();
  }, []);
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

// export default App;
