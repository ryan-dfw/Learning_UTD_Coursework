import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SelectedContact from "./components/SelectedContact/SelectedContact";
import BackButton from "./components/BackButton/BackButton";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
          <BackButton setSelectedContactId={setSelectedContactId} />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
