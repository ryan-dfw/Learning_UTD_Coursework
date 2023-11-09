import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {posts.map((post) => (
        <>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      ))}
    </>
  );
}

export default App;
