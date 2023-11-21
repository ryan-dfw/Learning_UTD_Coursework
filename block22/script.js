const newPartyForm = document.querySelector("#new-party-form");
const partyContainer = document.querySelector("#party-container");

const PARTIES_API_URL =
  "http://fsa-async-await.herokuapp.com/api/workshop/parties";

const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

const deleteParty = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete party");
    }
  } catch (error) {
    console.error(error);
  }
};

const renderSinglePartyById = async (id) => {
  try {
    const party = await getPartyById(id);

    const partyDetailsElement = document.createElement("div");
    partyDetailsElement.classList.add("party-details");
    console.log(party);
    partyDetailsElement.innerHTML = `
            <h2>${party.name}</h2>
            <p>${party.description}</p>
            <p>${party.date}</p>
            <p>${party.time}</p>
            <p>${party.location}</p>
          </ul>
            <button class="close-button">Close</button>
        `;
    partyContainer.appendChild(partyDetailsElement);

    const closeButton = partyDetailsElement.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      partyDetailsElement.remove();
    });
  } catch (error) {
    console.error(error);
  }
};

const deletePartyAndUpdateList = async (partyId) => {
  await deleteParty(partyId);
  const updatedParties = await getAllParties();
  renderParties(updatedParties);
};

const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = "";
    parties.forEach((party) => {
      const partyElement = document.createElement("div");
      partyElement.classList.add("party");
      partyElement.innerHTML = `
        <h2>${party.name}</h2>
        <button class="details-button" data-id="${party.id}">See Details</button>
        <button class="delete-button" data-id="${party.id}">Delete</button>
      `;
      partyContainer.appendChild(partyElement);

      const detailsButton = partyElement.querySelector(".details-button");
      detailsButton.addEventListener("click", async (event) => {
        const partyId = event.target.dataset.id;
        await renderSinglePartyById(partyId);
        const partyDetailsElement = document.querySelector(".party-details");
        if (partyDetailsElement) {
          partyDetailsElement.scrollIntoView({ behavior: "smooth" });
        }
      });

      const deleteButton = partyElement.querySelector(".delete-button");
      deleteButton.addEventListener("click", async (event) => {
        const partyId = event.target.dataset.id;
        await deletePartyAndUpdateList(partyId);
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const init = async () => {
  try {
    const parties = await getAllParties();
    renderParties(parties);
  } catch (error) {
    console.error(error);
  }
};

init();
