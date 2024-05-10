import React from "react";
import "./TodoSearchStyles.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Qué tarea quieres recordar ?"
    />
  );
}

export { TodoSearch };
