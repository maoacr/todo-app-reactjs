import React from "react";
import "./TodoItemStyles.css";

function TodoItem({ text }) {
  return (
    <li>
      <span>C</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
