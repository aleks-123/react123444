import React, { useState } from "react";
import ShowDate from "./ShowDate";

const Dates = () => {
  const [dates, setDates] = useState([]);

  const addDate = () => {
    let date = new Date().toString();

    setDates((oldState) => {
      return [...oldState, date];
    });
    console.log(date);
  };

  return (
    <div>
      <ShowDate dates={dates} />
      <button onClick={addDate}> Add Date</button>;
    </div>
  );
};

export default Dates;
