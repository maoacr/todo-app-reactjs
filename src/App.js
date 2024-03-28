import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Estudiar todos los dias", completed: true },
  { text: "Prueba de texto largo por cualquier razon", completed: true },
  { text: "Terminar el curso de React.js", completed: true },
  { text: "Tomar café", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <header>
        <TodoCounter completed={3} total={8} />
      </header>
      <main>
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
      </main>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
