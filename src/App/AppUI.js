import React from "react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { Modal } from "../components/Modal";
import { ToDoForm } from "../components/ToDoForm";

import { ToDoContext } from "../context";

import "./App.css";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    isLoading,
    isError,
    isOpenModal,
    totalTodos,
    // setIsOpenModal,
  } = React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <header>
        <TodoCounter />
      </header>
      <main>
        <TodoSearch />
        <TodoList>
          {isLoading && <Loader />}
          {isError && <Error />}
          {!isLoading && totalTodos === 0 && <p>Crea tu primer ToDo</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </main>
      <CreateTodoButton />

      {isOpenModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
