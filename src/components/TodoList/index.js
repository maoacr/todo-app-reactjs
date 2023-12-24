import React from "react";
import "./TodoListStyle.css";

function TodoList({ children }) {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}

export { TodoList };
