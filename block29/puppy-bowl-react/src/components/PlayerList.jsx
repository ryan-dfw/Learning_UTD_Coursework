import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ APIURL }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/players`);
        const playerData = await response.json();
        setPlayers(playerData.data.players);
      } catch (err) {
        console.error("Error fetching players!", err);
      }
    };

    fetchData();
  }, [APIURL]);

  const handlePlayerRemove = async (playerId) => {
    try {
      await removePlayer(playerId);
      setPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== playerId)
      );
      console.log(`Player #${playerId} removed in PlayerList component`);
    } catch (err) {}
    console.error(`Error removing player #${playerId}`, err);
  };

  return (
    <div id="all-players-container">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          APIURL={APIURL}
          onRemove={handlePlayerRemove}
        />
      ))}
    </div>
  );
};

export default PlayerList;
