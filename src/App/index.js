import React from "react";
import { AppUI } from "../App/AppUI";
import { useLocalStorage } from "..//Hooks/useLocalStorage";

function App() {
  const [todos, updateItems] = useLocalStorage("TODOS", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    updateItems(newTodos);
  };

  const deleteTodo = (text) => {
    console.log("Delete");
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    updateItems(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
