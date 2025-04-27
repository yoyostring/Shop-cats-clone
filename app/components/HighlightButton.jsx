"use state"

import React, {useState} from "react";


function HighlightButton({ text = "NOMINATE", customStyle = {}, onClick = () => {} }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  const baseStyle = {
    backgroundColor: isHighlighted ? "yellow" : "blue",
    color: isHighlighted ? "red" : "#00e42f",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    marginTop: "20px",
    ...customStyle, // override with custom styles
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={baseStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default HighlightButton;

