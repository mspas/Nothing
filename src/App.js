import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Ad from "./components/Ad";
import Quotes from "./components/Quotes";
import Prizes from "./components/Prizes";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Ad id="about-nothing" waitBeforeShow={8000} />
    </div>
  );
}

export default App;
