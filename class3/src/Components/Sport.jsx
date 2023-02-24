import React from "react";
import { PropTypes } from "prop-types";

const Sport = ({ name, sport }) => {
  return (
    <div>
      <div>
        <h1>My name is {name}</h1>
        <h3>My favorite sport is {sport}</h3>
      </div>
    </div>
  );
};
Sport.propTypes = {
  name: PropTypes.string.isRequired,
  sport: PropTypes.string,
};

export default Sport;
