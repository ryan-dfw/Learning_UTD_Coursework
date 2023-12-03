import React, { useState } from "react";

const PlayerCard = ({ player, APIURL, onRemove }) => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    const playerId = player.id;
    try {
      const response = await fetch(`${APIURL}/players/${playerId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch player #${playerId}`);
      }
      const singlePlayerData = await response.json();
      setDetails(singlePlayerData);
    } catch (err) {
      console.error(`Error fetching details for player #${playerId}`, err);
    }
  };

  const handleRemove = async () => {
    const playerId = player.id;
    try {
      await fetch(`${APIURL}/players/${playerId}`, {
        method: "DELETE",
      });
      onRemove && onRemove(playerId);
      console.log(`Player #${playerId} removed successfully`);
    } catch (err) {
      console.error(`Error removing player #${playerId} from the roster`, err);
    }
  };

  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <img
        src={player.imageUrl}
        alt={`a picture of ${player.name}`}
      />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button
        className="details-btn"
        onClick={fetchDetails}>
        Details
      </button>
      <button
        className="remove-btn"
        onClick={handleRemove}>
        Remove from Roster
      </button>
      {/* ... */}
    </div>
  );
};

export default PlayerCard;
