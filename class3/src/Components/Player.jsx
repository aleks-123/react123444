import React from "react";

const Player = ({ player: { firstName, print } }) => {
  return (
    <div>
      <h1> Player name is {firstName}!</h1>
      <button onClick={print}>Print players score!!!</button>
    </div>
  );
};

export default Player;
