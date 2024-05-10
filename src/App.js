import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

function App() {
  const localStorageTODOs = localStorage.getItem("TODOS");
  let parsedTODOs;

  if (!localStorageTODOs) {
    localStorage.setItem("TODOS", JSON.stringify([]));
    parsedTODOs = [];
  } else {
    parsedTODOs = JSON.parse(localStorageTODOs);
  }

  const [todos, setTodos] = React.useState(parsedTODOs);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const updateTODOs = (updatedTODOs) => {
    localStorage.setItem("TODOS", JSON.stringify(updatedTODOs));
    setTodos(updatedTODOs);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    updateTODOs(newTodos);
  };

  const deleteTodo = (text) => {
    console.log("Delete");
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    updateTODOs(newTodos);
  };

  return (
    <React.Fragment>
      <header>
        <TodoCounter completed={completedTodos} total={totalTodos} />
      </header>
      <main>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
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

export default App;
