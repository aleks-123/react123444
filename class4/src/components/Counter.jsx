import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((oldState) => oldState + 1);
  };
  const subb = () => {
    setCounter((oldState) => oldState - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h3>-- {counter} --</h3>
      <button onClick={subb}>SUB ----</button>
      <button onClick={add}>ADD ++++ </button>
      <button onClick={reset}>RESET+++++++</button>
    </div>
  );
};

export default Counter;
