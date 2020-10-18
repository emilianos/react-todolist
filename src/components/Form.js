import React from "react";

const Form = ({
  inputValue,
  setInputValue,
  handleSubmit,
  handleUpdate,
  isEditing,
  isLoading,
  todo
}) => {
  return (
    <div className="form">
      <input
        id="todoInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder={"Type here..."}
      />
      <button
        onClick={handleSubmit}
        className="submit"
        hidden={isEditing}
        disabled={isLoading}
      >
        Submit
      </button>
      <button
        onClick={() => handleUpdate(todo)}
        className="submit"
        hidden={!isEditing}
        disabled={isLoading}
      >
        Update
      </button>
    </div>
  );
};

export default Form;
