import Sport from "./Components/Sport";
import Sport2 from "./Components/Sport2";
import Player from "./Components/Player";
import Komentari from "./Components/Komentari";
import { StudentClass } from "./Components/StudentClass";
import StudentiLista from "./Components/StudentiLista";

function App() {
  let sportsAndHuman = [
    { name: "Filip", sport: "Football" },
    { name: "Aleksandar", sport: "Tennis" },
    { name: "Martina", sport: "Sleeping" },
    { name: "Zlatko", sport: "racing" },
  ];

  let player = {
    firstName: "Aleksndar",
    ratting: 5,
    print: function () {
      console.log(`Name : ${player.firstName} -rating : ${player.ratting}`);
    },
  };

  const komentariLista = [
    {
      id: 1,
      autor: "Aleksandar",
      sodrzina: "Dzverovite i zivotnite",
      likeFunction: function () {
        console.log("LIKE");
      },
    },
    {
      id: 2,
      autor: "Martina",
      sodrzina: "Zivotot vo Korea",
      likeFunction: function () {
        console.log("LIKE");
      },
    },
    {
      id: 3,
      autor: "Jonce",
      sodrzina: "Utroto na niva",
      likeFunction: function () {
        console.log("LIKE");
      },
    },
    {
      id: 4,
      autor: "Marika",
      sodrzina: "Avanturite na Marika",
      likeFunction: function () {
        console.log("LIKE");
      },
    },
    {
      id: 5,
      autor: "Leona",
      sodrzina: "Palavata Leona",
      likeFunction: function () {
        console.log("LIKE");
      },
    },
  ];

  // Vezba Da se napravi komponenta za komentari, komentarite neka imaat id, avtor i sodrzina
  // preku druga komponenta da pratime lista na komentari i vnatre i vo komponentata da ja izminime taa lista i da gi prikazime site informacii
  // neka bide vo nekoja tabela
  // Za sekoj komentar neka ima nekoe kopce so ime Like koe kje ispisuva vo konzola LIKE

  const student = [{ name: "Luka", lastName: "Angelov", index: 123456 }];

  return (
    <div className="App">
      {/* <Sport name="Martin" sport="Football" />
      <Sport name="Kristijan" sport="Tennis" />
      <Sport name="Laura" sport="Rakomet" /> */}

      {sportsAndHuman.map((items, i) => {
        return <Sport key={i} name={items.name} sport={items.sport} />;
      })}
      <Sport2 sports={sportsAndHuman} />
      <Player player={player} />

      {komentariLista.map((item) => {
        return (
          <Komentari
            id={item.id}
            key={item.id}
            avtor={item.autor}
            sodrzina={item.sodrzina}
            like={item.likeFunction}
          />
        );
      })}
      <StudentClass student={student} />
      <StudentiLista />
    </div>
  );
}

export default App;

// Neka imame nekoj student komponenta
// neka za studentot cuvame name/lastName /index
// neka prakjame prekuj parrent komponentata nekoja lista
// na studenti i vo student komponentata da ja prikazime
// ovaa lista vo tablea
// pokraj listata da prajme i uste edno propery
// koe kje bide semestar, i kje se prikazuva na ekranot posle tabelata
// da staime PropTypes za studentite i da bide requireed
// neka ima i za semestarot PropTypes
// no dokolku ne go pratime semestarot sekogash da se ispisuva zimski
