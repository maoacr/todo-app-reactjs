import React from "react";
import "./TodoItemStyles.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span className={`completed-icon task-icon`} onClick={onComplete}>
        <svg
          className={`w-6 h-6 text-gray-800 ${completed && "completed"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      </span>
      <p className={`${completed && "completed"}`}>{text}</p>
      <span className={`close-icon task-icon`}>
        <svg
          className="w-6 h-6 text-gray-800 task-icon close"
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={onDelete}
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      </span>
    </li>
  );
}

export { TodoItem };
