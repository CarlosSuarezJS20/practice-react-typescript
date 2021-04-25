import React, { useState } from "react";
import Todolist from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toDoAddHandler = (textToDo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: textToDo },
    ]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={toDoAddHandler} />
      <Todolist items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;
