import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Content from "./components/Content";
function App() {
  return (
    <div style={{ width: "100vw" }}>
      <div className="sr-only" id="alert"></div>
      <Header />
      <Home id="home" />
      <Content waitBeforeShow={8000} />
    </div>
  );
}

export default App;
