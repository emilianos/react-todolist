import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Title from "./components/Title";
import "./App.css";
import api from "./api";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const fetchTodos = async () => {
    const { status, data } = await api.todos.getAll();
    if (status === 200) {
      setTodos(data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (inputValue === "") return;
    const newTodo = { text: inputValue };
    const { status } = await api.todos.create(newTodo);
    if (status === 200) {
      fetchTodos();
      setInputValue("");
    }
  };

  const handleUpdate = async () => {
    console.log(currentId);
    if (inputValue === "") return;
    const updateTodo = { text: inputValue, id: currentId };
    const { status } = await api.todos.update(updateTodo);

    if (status === 200) {
      fetchTodos();
      setInputValue("");
      setIsEditing(false);
    }
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setInputValue(todo.text);
    setCurrentId(todo._id);
    document.getElementById("todoInput").focus();
  };

  const handleDeleteTodo = async (id) => {
    const { status } = await api.todos.destroy(id);
    if (status === 200) {
      fetchTodos();
    }
  };

  return (
    <div className="app">
      <div className="todolist">
        <Title myName="Emiliano" />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          isEditing={isEditing}
        />
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            key={todo._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
