import React from "react";

const Sport2 = (props) => {
  return (
    <div>
      {props.sports.map((object, i) => {
        return (
          <div key={i}>
            <h1>My name is {object.name}</h1>
            <h3>My favorite sport is {object.sport}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Sport2;
