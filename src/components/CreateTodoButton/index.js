import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      onClick={() => console.log("Create task button Clicked")}
      className="CreateTodoButton"
    >
      {" "}
      +{" "}
    </button>
  );
}

export { CreateTodoButton };
