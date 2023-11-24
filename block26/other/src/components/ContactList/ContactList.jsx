import { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3P0", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(
          " https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await res.json();
        console.log(result);
        setContacts(result);
      } catch (err) {
        console.error(err);
      }
    }
    fetchContacts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact list</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {dummyContacts.map((contact) => (
          <ContactRow
            contact={contact}
            setSelectedContactId={setSelectedContactId}
            key={contact.id}
          />
        ))}
      </tbody>
    </table>
  );
}
