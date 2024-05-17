import React from "react";
import "./CreateTodoButton.css";
import { ToDoContext } from "../../context";

function CreateTodoButton() {
  const { setIsOpenModal } = React.useContext(ToDoContext);
  return (
    <button
      onClick={() => setIsOpenModal((isOpenModalState) => !isOpenModalState)}
      className="CreateTodoButton"
    >
      {" "}
      +{" "}
    </button>
  );
}

export { CreateTodoButton };
