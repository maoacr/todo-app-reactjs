import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import "./App.css";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Estudiar todos los dias", completed: false },
  { text: "Tomar café", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={8} />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
