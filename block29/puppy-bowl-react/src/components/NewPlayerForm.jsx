import React, { useState, useEffect } from "react";

const NewPlayerForm = ({ APIURL, onAddPlayer }) => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${APIURL}players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      });
    } catch (err) {
      console.error("Error adding that player!", err);
    }
  };

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${APIURL}players`);
      const playerData = await response.json();
      return playerData;
    } catch (err) {
      console.error("Error fetching players!", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewPlayer(formData);
      const allPlayers = await fetchAllPlayers();
      onAddPlayer(allPlayers);
      window.location.reload();
    } catch (err) {
      console.error("Error adding a new player!", err);
    }
  };

  return (
    <form
      id="new-player-form"
      onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        name="breed"
        value={formData.breed}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="status">Status:</label>
      <input
        type="text"
        id="status"
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Add New Player</button>
    </form>
  );
};

export default NewPlayerForm;
