import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigations";
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import bookLogo from "./assets/books.png";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route
            path="/books"
            element={<Books />}
          />
          <Route
            path="/account"
            element={<Account />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
