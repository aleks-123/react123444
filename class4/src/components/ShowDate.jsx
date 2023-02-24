import React from "react";

const ShowDate = (props) => {
  return (
    <div>
      <h3>Prikazi date</h3>{" "}
      {props.dates.map((date, i) => {
        return <p key={i}>{date} </p>;
      })}
    </div>
  );
};

export default ShowDate;
