import { useState } from "react";
import { puppyList } from "./data";

import "./App.css";

const App = () => {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleMouseEnter = (puppyId) => {
    setFeatPupId(puppyId);
  };

  const handleMouseLeave = () => {};

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <div>
      {puppies.map((puppy) => (
        <p
          className="link"
          key={puppy.id}
          onMouseEnter={() => handleMouseEnter(puppy.id)}
          onMouseLeave={handleMouseLeave}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
