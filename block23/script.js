const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");
const cohortName = "2308-ftb-mt-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const playerData = await response.json();
    console.log("Fetched Players:", playerData);
    return playerData;
  } catch (err) {
    console.error("error fetching players!", err);
  }
};

const fetchSinglePlayer = async (playerId) => {
  // (playerId: u8) -> playerdata: json
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch player #${playerId}`);
    }
    const singlePlayerData = await response.json();
    return singlePlayerData;
  } catch (err) {
    console.error(`error fetching player #${playerId}!`, err);
  }
};

const addNewPlayer = async (playerObj) => {
  // (playerObj: json) -> void
  try {
    const response = await fetch(`${APIURL}/players`, {
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

const removePlayer = async (playerId) => {
  // (playerId: u8) -> void
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(`error removing player #${playerId} from the roster!`, err);
  }
};

const renderAllPlayers = (playerList) => {
  console.log("Received playerList:", playerList);
  try {
    const playerArray = playerList.data.players;
    let playerContainerHTML = "";
    console.log(playerArray);
    playerArray.forEach((player) => {
      const playerCardHTML = `
      <div class="player-card">
      <h2>${player.name}</h2>
      <img src="${player.imageUrl}" alt="a picture of ${player.name}">
      <p>Breed: ${player.breed}</p>
      <p>Status: ${player.status}</p>
      <button class="details-btn" data-player-id="${player.id}">Details</button>
      <button class="remove-btn" data-player-id="${player.id}">Remove from Roster</button>
      </div>
      `;
      playerContainerHTML += playerCardHTML;
    });
    const playerContainer = document.getElementById("all-players-container");
    playerContainer.innerHTML = playerContainerHTML;
    document.querySelectorAll(".details-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const playerId = button.getAttribute("data-player-id");
        try {
          const somePlayerData = await fetchSinglePlayer(playerId);
          console.log("Player Details:", somePlayerData);
        } catch (err) {
          console.error(`Error fetching details for player #${playerId}`, err);
        }
      });
    });
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const playerId = button.getAttribute("data-player-id");
        try {
          await removePlayer(playerId);
          console.log(`Player #${playerId} removed successfully`);
        } catch (err) {
          console.error(
            `Error removing player #${playerId} from the roster`,
            err
          );
        }
      });
    });
    return playerContainerHTML;
  } catch (err) {
    console.error("`error rendering` players!", err);
  }
};

const renderNewPlayerForm = () => {
  try {
    const newPlayerFormHTML = `
      <form id="new-player-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="breed">Breed:</label>
        <input type="text" id="breed" name="breed" required>
        <label for="status">Status:</label>
        <input type="text" id="status" name="status" required>
        <label for="imageUrl">Image URL:</label>
        <input type="url" id="imageUrl" name="imageUrl" required>
        <button type="submit">Add New Player</button>
      </form>
    `;
    const newPlayerFormContainer = document.getElementById("new-player-form");
    newPlayerFormContainer.innerHTML = newPlayerFormHTML;
    const form = document.getElementById("new-player-form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const breed = document.getElementById("breed").value;
      const status = document.getElementById("status").value;
      const imageUrl = document.getElementById("imageUrl").value;
      const newPlayerObj = {
        name,
        breed,
        status,
        imageUrl,
      };
      try {
        await addNewPlayer(newPlayerObj);
        const allPlayers = await fetchAllPlayers();
        renderAllPlayers(allPlayers);
        // form.reset();
        console.log("New player added successfully!");
      } catch (err) {
        console.error("Error adding a new player!", err);
      }
    });
  } catch (err) {
    console.error("error rendering the new player form!", err);
  }
};

const init = async () => {
  try {
    const players = await fetchAllPlayers();
    console.log("Players in Init:", players);
    renderAllPlayers(players);
    // renderNewPlayerForm();
  } catch (err) {
    console.error("Error initializing", err);
  }
};

init();
