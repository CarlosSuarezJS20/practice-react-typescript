import React, { useRef } from "react";
import "./NewTodo.css";

interface NewToDoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewToDoProps> = (props) => {
  const userInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.onAddTodo(userInputRef.current!.value);
  };

  return (
    <form
      onSubmit={(e) => {
        todoSubmitHandler(e);
      }}
    >
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input ref={userInputRef} type="text" id="todo-text" />
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  );
};

export default NewTodo;


// The below is for Router and typescript 
//  npm install --save-dev @types/react-router-dom