import React from "react";

const Form = ({
  inputValue,
  setInputValue,
  inputRef,
  handleCancel,
  handleSubmit,
  handleUpdate,
  isEditing,
  isLoading,
  todo
}) => {
  return (
    <div className="form">
      <div className="input-container">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder={"Type here..."}
          ref={inputRef}
        />
        <button onClick={handleCancel} className="cancel" hidden={!isEditing}>
          ×
        </button>
      </div>
      <button
        onClick={isEditing ? () => handleUpdate(todo) : handleSubmit}
        className="submit"
        disabled={isLoading}
      >
        {isEditing ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default Form;
