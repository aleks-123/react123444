import React from "react";

const Komentari = ({ id, avtor, sodrzina, like }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">{avtor}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sodrzina}</td>
            <td>{id}</td>
            <td>
              <button onClick={like}>KLIKNIME</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Komentari;
