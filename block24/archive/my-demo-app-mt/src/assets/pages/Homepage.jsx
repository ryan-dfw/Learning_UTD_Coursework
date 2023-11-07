import "./Homepage.css";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Homepage() {
  const userName = "John";
  let isLoggedIn = true;
  return (
    <div className="homepage-container">
      <Header />
      {isLoggedIn ? <p>Hi, {userName}!</p> : <button>Please Login</button>}
      <Footer />
    </div>
  );
}
