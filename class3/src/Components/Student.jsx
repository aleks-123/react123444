import React from "react";

const Student = ({ name, lastName, index }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{lastName}</td>
          <td>{index}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Student;
