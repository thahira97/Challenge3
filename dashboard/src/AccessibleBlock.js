import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import "./AccessibleBlock.css"
const AccessibleBlock = (props) => {
  // const [show, setShow] = useState(false);

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isOn1, setIsOn1] = useState(false);


 
  const closeHandler = () => {
    props.showStateHandler()
  };

  const handleButtonClick1 = () => {
    setIsOn1(!isOn1);
  };
  const [isOn2, setIsOn2] = useState(false);

  const handleButtonClick2 = () => {
    setIsOn2(!isOn2);
  };
  const [isOn3, setIsOn3] = useState(false);

  const handleButtonClick3 = () => {
    setIsOn3(!isOn3);
  };

  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const [select, setSelect] = useState("");

  const selectHandler = (event) => {
    console.log(event.target.value);
    setSelect(event.target.value);
  };

  const resetHandler = () => {
    setValue("");
    setSelect("");
    setIsOn1(false);
    setIsOn2(false);
    setIsOn3(false);
  };

  return (
    <Draggable>
      <div className={`accessibile-block ${props.show ? "visible" : "hidden"}`}>
        <h4 style={{ textAlign: "center" }}>Accessibility Settings</h4>
        <form className="access-form">
          <input
            value={value}
            type="text"
            id="searchbar"
            name="searchbar"
            placeholder="Search"
            onChange={changeHandler}
          ></input>
        </form>
        <br></br>
        <select
          value={select}
          className="access-select"
          onChange={selectHandler}
          style={{ width: "min-content", alignItems: "center", justifyItems:"center" }}
        >
          <option value="language">Select Language</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Spanish">Spanish</option>
          <option value="Japanese">Japanese</option>
        </select>
        <br></br>
        <br></br>
        <aside className="toggle-butts">
          <div>
            <button
              className={isOn1 ? "buttons-17 on" : "buttons-17 off"}
              onClick={handleButtonClick1}
            >
              {isOn1 ? "ON" : "OFF"}
            </button>
            Seizure Safe Profile
          </div>
          <br></br>
          <div>
            <button
              className={isOn2 ? "buttons-17 on" : "buttons-17 off"}
              onClick={handleButtonClick2}
            >
              {isOn2 ? "ON" : "OFF"}
            </button>
            Vision Impaired
          </div>
          <br></br>
          <div>
            <button
              className={isOn3 ? "buttons-17 on" : "buttons-17 off"}
              onClick={handleButtonClick3}
            >
              {isOn3 ? "ON" : "OFF"}
            </button>
            ADHD Friendly
          </div>
        </aside>
        <br></br>
        <span>
          <button className="buttons-17" onClick={resetHandler}>
            Reset settings
          </button>
          <button className="buttons-17" onClick={closeHandler}>
            Close
          </button>
        </span>
      </div>
    </Draggable>
  );
};

export default AccessibleBlock;
