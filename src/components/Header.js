import React from "react";
import "../App.css";
import "../styles/header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top animated fadeInDown">
      <a className="navbar-brand" href="#home-section">
        Nothing.
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-content">
          <li className="nav-item active">
            <a className="nav-link" href="#home-section">
              HOME <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-section">
              BUY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-section">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
