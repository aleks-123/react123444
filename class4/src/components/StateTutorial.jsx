import React, { useState } from "react";

const StateTutorial = () => {
  // InputValue is the propery that we use
  // setInputValues is a funtion which we use to change it
  const [inputValue, setInputValue] = useState("Martin");

  // const onChange = (event) => {
  //   console.log(event.target.value);
  //   var element = document.getElementById("show");
  //   element.innerHTML = event.target.value;
  // };

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>State!</h1>
      <input onChange={onChange} placeholder="enter your name"></input>
      <h2>{inputValue}</h2>
    </div>
  );
};

export default StateTutorial;
