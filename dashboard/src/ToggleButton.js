import React, { useState } from "react";
import "./ToggleButton.css"; // Import the CSS file

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleButtonClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={isOn ? "buttons-17 on" : "buttons-17 off"}  onClick={handleButtonClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
