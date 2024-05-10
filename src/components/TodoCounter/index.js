import React from "react";
import "./TodoCounterStyles.css";

function TodoCounter({ completed, total }) {
  return (
    <h2 className={`title`}>
      Hoy has completado
      <br />
      <span className={`completed-tasks`}>{completed}</span>
      de
      <span className={`total-tasks`}>{total}</span>
      tareas
    </h2>
  );
}

export { TodoCounter };
