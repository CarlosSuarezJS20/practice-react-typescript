import React from "react";
import "./TodoList.css";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button
            onClick={() => {
              props.onDeleteTodo(item.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
