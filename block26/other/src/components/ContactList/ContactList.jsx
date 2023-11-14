import { useState } from "react";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3P0", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <table>
      <thead>
        <tr colspan="3">Contact list</tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {dummyContacts.map((contact) => (
          <ContactRow contact={contact} />
        ))}
      </tbody>
    </table>
  );
}
