import React from 'react';
export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        <input
          type="checkbox"
          onChange={event => {
            console.log(event.target.checked);
            completeTodo(index, event.target.checked);
          }}
        />
        {todo.text || todo.title}
        <span
          className="remove"
          onClick={() => {
            removeTodo(index);
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
