import React from "react";

const Todo = ({ todo, index, handleDeleteTodo, handleEditTodo, isLoading }) => {
  return (
    <div className="todo">
      <span className="todo-text">
        {index + 1}. {todo.text}
      </span>
      <span
        onClick={!isLoading ? () => handleDeleteTodo(todo._id) : undefined}
        className="todo-delete"
      >
        ×
      </span>
      <span onClick={() => handleEditTodo(todo)} className="todo-delete">
        ✎
      </span>
    </div>
  );
};

export default Todo;
