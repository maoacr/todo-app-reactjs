import React from "react";
import "./TodoSearchStyles.css";
import { ToDoContext } from "../../context";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext);
  return (
    <input
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Qué tarea quieres recordar ?"
    />
  );
}

export { TodoSearch };
