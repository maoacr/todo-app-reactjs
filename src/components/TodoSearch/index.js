import React from "react";
import "./TodoSearchStyles.css";

function TodoSearch() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      onChange={(e) => handleChange(e)}
      placeholder="Qué tarea quieres recordar ?"
    />
  );
}

export { TodoSearch };
