import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSingleUser(userId) {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`
        );
        const json = await res.json();
        setContact(json);
      } catch (err) {}
    }
    fetchSingleUser(selectedContactId);
  }, []);
  return (
    <div>
      <p>Selected Contact is {contact?.name} </p>
      <p>website:{contact?.website}</p>
      <p>username:{contact?.username}</p>
    </div>
  );
}
