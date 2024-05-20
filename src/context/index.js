import { React, useState, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const { item, updateItems, isLoading, isError } = useLocalStorage(
    "TODOS",
    []
  );
  const [searchValue, setSearchValue] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);

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
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    updateItems(newTodos);
  };

  const addNewToDo = (newToDoValue) => {
    const newTodos = [...item];
    newTodos.push({
      text: newToDoValue,
      completed: false,
    });
    updateItems(newTodos);
  };

  return (
    <ToDoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        isLoading,
        isError,
        isOpenModal,
        setIsOpenModal,
        addNewToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
