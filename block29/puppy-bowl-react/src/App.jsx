import "./App.css";
import { useState } from "react";
import PlayerList from "./components/PlayerList";
import NewPlayerForm from "./components/NewPlayerForm";

const cohortName = "2308-ftb-mt-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  const handleAddPlayer = (newPlayers) => {
    setAllPlayers(newPlayers);
  };

  return (
    <>
      <PlayerList
        APIURL={APIURL}
        allPlayers={allPlayers}
      />
      <NewPlayerForm
        APIURL={APIURL}
        onAddPlayer={handleAddPlayer}
      />
    </>
  );
}
