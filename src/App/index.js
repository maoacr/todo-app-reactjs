import { React, useState } from "react";
import { AppUI } from "../App/AppUI";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function App() {
  const { item, updateItems, isLoading, isError } = useLocalStorage(
    "TODOS",
    []
  );
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = item.filter((todo) => todo.completed).length;
  const totalTodos = item.length;
  const searchedTodos = item.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    updateItems(newTodos);
  };

  const deleteTodo = (text) => {
    console.log("Delete");
    const newTodos = [...item];
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
      isLoading={isLoading}
      isError={isError}
    />
  );
}

export default App;
