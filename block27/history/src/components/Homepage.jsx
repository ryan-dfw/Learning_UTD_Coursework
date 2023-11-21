import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import React from "react";

export default function Homepage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>Homepage</div>;
}
