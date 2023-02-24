import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Dates from "./components/Dates";
import StateTutorial from "./components/StateTutorial";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setPassword("");
  }, [username]);

  return (
    <div className="App">
      <StateTutorial />
      <Dates />
      <Counter />
      <div className="forma">
        <input
          type="text"
          placeholder="enter Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="enter Comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
      </div>

      <p>username: {username}</p>
      <p>password: {password}</p>
      <p>comment: {comment}</p>
    </div>
  );
}

export default App;

// Da se napravi kompnenta Counter
// neka ima nekoj h1 element koj sto kje pokazuva nekoja vrednost
