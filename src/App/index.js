import React from "react";
import { AppUI } from "../App/AppUI";
import { ToDoProvider } from "../context";

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
