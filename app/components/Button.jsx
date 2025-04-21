import React from "react";
// import Image from "next/react"

function Button(){
    return (
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="youtube.jpeg"
            alt="Button Image"
            className="hover-button"
          />
        </a>
      );
}

export default Button;