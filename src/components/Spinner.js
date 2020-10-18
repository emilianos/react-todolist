import React from "react";
import "./Spinner.css";

const Spinner = ({ isLoading }) => {
  return (
    <>
      <div
        style={{ display: !isLoading ? "none" : "block" }}
        className="spinner-container"
      >
        <div className="spinner"></div>
        <span>Loading...</span>
      </div>
    </>
  );
};

export default Spinner;
