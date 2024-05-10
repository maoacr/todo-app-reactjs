import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Estudiar todos los dias", completed: true },
  { text: "Prueba de texto largo por cualquier razon", completed: true },
  { text: "Terminar el curso de React.js", completed: true },
  { text: "Tomar café", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

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
            />
          ))}
        </TodoList>
      </main>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
