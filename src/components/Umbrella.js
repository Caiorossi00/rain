import React from "react";

function Umbrella({ title, onUpdateTitle }) {
  return (
    <div
      className="umbrella-title"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onUpdateTitle(e.target.textContent)}
    >
      {title}
    </div>
  );
}

export default Umbrella;
