import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {user && <h1>Details for {user.name}</h1>}
      <p>{user?.address.street}</p>
    </div>
  );
}
