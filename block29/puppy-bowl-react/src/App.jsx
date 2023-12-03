import "./App.css";
import { useState, useEffect } from "react";
import PlayerList from "./components/PlayerList";
import NewPlayerForm from "./components/NewPlayerForm";
import PlayerSearch from "./components/PlayerSearch"; // Import the new component

const cohortName = "2308-ftb-mt-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    // Fetch all players when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/players`);
        const playerData = await response.json();
        setAllPlayers(playerData.data.players);
      } catch (err) {
        console.error("Error fetching players!", err);
      }
    };

    fetchData();
  }, [APIURL]);

  const handleAddPlayer = (newPlayers) => {
    setAllPlayers(newPlayers);
  };

  const handleSearch = (searchText) => {
    // Filter players based on the search text
    const filtered = allPlayers.filter((player) =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  return (
    <>
      <PlayerSearch
        players={allPlayers}
        onSearch={handleSearch}
        APIURL={APIURL}
      />
      <PlayerList
        APIURL={APIURL}
        players={filteredPlayers.length > 0 ? filteredPlayers : allPlayers}
      />
      <NewPlayerForm
        APIURL={APIURL}
        onAddPlayer={handleAddPlayer}
      />
    </>
  );
}
