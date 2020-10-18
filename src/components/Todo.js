import React from "react";

const Todo = ({ todo, index, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className="todo">
      <span className="todo-text">
        {index + 1}. {todo.text}
      </span>
      <span onClick={() => handleDeleteTodo(todo._id)} className="todo-delete">
        ×
      </span>
      <span onClick={() => handleEditTodo(todo)} className="todo-delete">
        ✎
      </span>
    </div>
  );
};

export default Todo;
