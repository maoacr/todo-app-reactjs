import React from "react";
import "./TodoCounterStyles.css";

function TodoCounter({ completed, total }) {
  return (
    <h2 className={`title`}>
      Has completado
      <br />
      <span className={`completed-tasks`}>{completed}</span>
      de
      <span className={`total-tasks`}>{total}</span>
      TODOs
    </h2>
  );
}

export { TodoCounter };
