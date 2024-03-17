import React, { useState } from "react"; // Import useState from 'react'

function Item({ text, onRemove }) {
  const handleRemoveClick = () => {
    onRemove();
  };
  return (
    <>
      <div className="card">
        <input style={{ transform: "scale(3)" }} type="checkbox" />
        <p className="todotext">{text}</p>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </>
  );
}

export default Item;
