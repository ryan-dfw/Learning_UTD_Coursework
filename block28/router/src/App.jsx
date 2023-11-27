import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";

export default function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/blue"
            element={<Blue />}
          />
          <Route
            path="/red"
            element={<Red />}
          />
          <Route
            path="*"
            element={<h1>404: Not Found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}
