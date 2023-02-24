import React from "react";
import Student from "./Student";

const StudentiLista = () => {
  const listaNaStudenti = [
    { name: "Aleksandar", lastName: "Milosheski", index: "65865" },
    { name: "Marko", lastName: "Bilbil", index: "65823" },
    { name: "Martina", lastName: "Apostoloska", index: "25486" },
    { name: "Dzjelko", lastName: "Djelkoski", index: "782052" },
  ];

  const student = listaNaStudenti.map((s, i) => {
    return (
      <Student key={i} name={s.name} lastName={s.lastName} index={s.index} />
    );
  });

  return <div>{student}</div>;
};

export default StudentiLista;
