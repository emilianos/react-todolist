import React, { useState, useEffect, useRef } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Title from "./components/Title";
import Spinner from "./components/Spinner";
import "./App.css";
import api from "./api";

/**
 * @TODO
 * 1. Add single button instead of two buttons
 * 2. move db to firebase
 */

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      const { status, data } = await api.todos.getAll();
      if (status === 200) {
        setTodos(data);
        setInputValue("");
        setIsEditing(false);
      }
    } catch (erorr) {
      console.error(erorr);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (inputValue === "") return;
    setIsLoading(true);
    const newTodo = { text: inputValue };
    const { status } = await api.todos.create(newTodo);
    if (status === 200) {
      fetchTodos();
      setInputValue("");
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    if (inputValue === "") return;
    const updateTodo = { text: inputValue, id: currentId };
    const { status } = await api.todos.update(updateTodo);

    if (status === 200) {
      fetchTodos();
      setIsLoading(false);
    }
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setInputValue(todo.text);
    setCurrentId(todo._id);
    inputRef.current.focus();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setInputValue("");
  };

  const handleDeleteTodo = async (id) => {
    setIsLoading(true);
    const { status } = await api.todos.destroy(id);
    if (status === 200) {
      fetchTodos();
      setIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return <Spinner isLoading={isLoading} />;
  // }

  return (
    <div className="app">
      <Spinner isLoading={isLoading} />
      <div className="todolist">
        <Title myName="Emiliano" />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputRef={inputRef}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          isEditing={isEditing}
          isLoading={isLoading}
        />
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            isLoading={isLoading}
            key={todo._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
