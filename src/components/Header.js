import React from "react";
import Scroll from "react-scroll";
import "../App.css";
import "../styles/header.css";
const Link = Scroll.Link;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nav_active: true };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top animated fadeInDown">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          className="nav-link"
        >
          Nothing.
        </Link>
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
            <li id="nav0" className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                HOME
              </Link>
            </li>
            <li id="nav1" className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                ABOUT
              </Link>
            </li>
            <li id="nav2" className="nav-item">
              <Link
                to="buy"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-link"
              >
                BUY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
