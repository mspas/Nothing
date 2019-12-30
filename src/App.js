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
      <section>
        <Ad />
      </section>
      <section>
        <Quotes />
      </section>
      <section>
        <Prizes />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
