import React from "react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

import "./App.css";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  isLoading,
  isError,
}) {
  return (
    <React.Fragment>
      <header>
        <TodoCounter completed={completedTodos} total={totalTodos} />
      </header>
      <main>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {isLoading && <Loader />}
          {isError && <Error />}
          {!isLoading && searchedTodos === 0 && <p>Crea tu primer ToDo</p>}
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
    </React.Fragment>
  );
}

export { AppUI };
