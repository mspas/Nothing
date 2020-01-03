import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Content from "./components/Content";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Content waitBeforeShow={100} />
    </div>
  );
}

export default App;
