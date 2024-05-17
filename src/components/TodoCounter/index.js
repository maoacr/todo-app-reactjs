import React from "react";
import "./TodoCounterStyles.css";
import { ToDoContext } from "../../context";

function TodoCounter({ completed, total }) {
  const { completedTodos, totalTodos } = React.useContext(ToDoContext);
  return (
    <h2 className={`title`}>
      Hoy has completado
      <br />
      <span className={`completed-tasks`}>{completedTodos}</span>
      de
      <span className={`total-tasks`}>{totalTodos}</span>
      tareas
    </h2>
  );
}

export { TodoCounter };
