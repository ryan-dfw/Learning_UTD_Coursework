// app.jsx

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navigations";
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import bookLogo from "./assets/books.png";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com`;

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <ErrorBoundary>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route
              path="/"
              element={<Books APIURL={APIURL} />}
            />
            <Route
              path="/books"
              element={<Books APIURL={APIURL} />}
            />
            <Route
              path="/account"
              element={<Account APIURL={APIURL} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  APIURL={APIURL}
                  setToken={setToken}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  APIURL={APIURL}
                  setToken={setToken}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
}
