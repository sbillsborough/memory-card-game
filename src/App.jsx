import "./App.css";
import { Cards } from "./components/cards/Cards.jsx";
import { Header } from "./components/header/Header.jsx";
import { ScoreBoard } from "./components/scoreboard/Scoreboard.jsx";

function App() {
  return (
    <>
      <Header />
      <ScoreBoard />
      <Cards />
    </>
  );
}

export default App;
