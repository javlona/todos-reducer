import React from "react";
import { MdOutlineDeleteForever } from 'react-icons/md';

function ShowTodos({ todo, completed, deleteHandler }) {
  return (
    <div onClick={completed} className="showTodos">
      <span
        style={{
          textDecoration: todo.completed && "line-through",
          color: todo.completed && "#AAA",
        }}
      >
        {todo.name}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteHandler();
        }}
      >
        <MdOutlineDeleteForever />
      </button>
    </div>
  );
}

export default ShowTodos;
