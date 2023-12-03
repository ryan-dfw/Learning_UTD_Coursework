import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayerSearch = ({ players, onSearch, APIURL }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="player-search">
      <label htmlFor="search">Search Players:</label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Enter player name"
      />
      {searchText && (
        <div className="matching-players">
          {players
            .filter((player) =>
              player.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((matchingPlayer) => (
              <p key={matchingPlayer.id}>{matchingPlayer.name}</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default PlayerSearch;
