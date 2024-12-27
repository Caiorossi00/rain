import React from "react";

function Goal({ text, onUpdateText }) {
  return (
    <div
      className="goal"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onUpdateText(e.target.textContent)}
    >
      {text}
    </div>
  );
}

export default Goal;
