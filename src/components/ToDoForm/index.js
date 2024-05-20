import React from "react";
import "./ToDoFormStyles.css";
import { ToDoContext } from "../../context";

function ToDoForm() {
  const { setIsOpenModal, addNewToDo } = React.useContext(ToDoContext);
  const [newUserTask, setNewUserTask] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addNewToDo(newUserTask);
    setIsOpenModal(false);
  };

  const onCancel = (e) => {
    setIsOpenModal(false);
  };

  const onChange = (e) => {
    setNewUserTask(e.target.value);
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder="Pagar el arriendo"
        value={newUserTask}
        onChange={onChange}
        required
      />
      <div className="ToDoFormBtnContainer">
        <button
          className="ToDoFormBtn ToDoFormBtn--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="ToDoFormBtn ToDoFormBtn--add">Añadir</button>
      </div>
    </form>
  );
}

export { ToDoForm };
