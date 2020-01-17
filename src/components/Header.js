import React from "react";
import Scroll from "react-scroll";
import "../App.css";
import "../styles/header.css";

const Link = Scroll.Link;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_active: true,
      color_mode: "mode-bright",
      did_mount: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          did_mount: true
        },
        () => {
          this.setMode();
        }
      );
    }, 8100);
  }

  onSwitchMode = ev => {
    this.setState(
      {
        color_mode: `${ev.currentTarget.className}`
      },
      () => {
        this.setMode();
      }
    );
  };

  isDarkMode() {
    let value = this.state.color_mode;
    if (value.search("mode-dark") !== -1) return true;
    else return false;
  }

  setMode() {
    let img = document.getElementById("color-switch");
    let tooltip = document.getElementById("color-swtich-tooltip");

    if (this.isDarkMode()) {
      this.setDarkMode(img, tooltip);
    } else {
      this.setBrightMode(img, tooltip);
    }
  }

  setDarkMode(img, tooltip) {
    img.setAttribute("class", "mode-switch mode-bright tooltip");
    tooltip.innerHTML = "Bright mode";
    document
      .querySelector("nav")
      .setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-dark fixed-top animated fadeInDown"
      );
    document
      .getElementById("logoN")
      .setAttribute("class", "nav-link white-font");
    if (this.state.did_mount) {
      document
        .getElementById("prizes-wrap")
        .setAttribute("class", "center prizes-dark");
      document
        .getElementById("quotes-wrap")
        .setAttribute("class", "quotes-dark");

      let opts = document.getElementsByClassName("opt");
      for (let i = 0; i < opts.length; i++) {
        opts[i].setAttribute("class", "opt opt-dark");
      }

      document
        .getElementById("mountains")
        .setAttribute("class", "row cosmos-bg");
      document.getElementById("line-mount-1").innerHTML = "This galaxy";
      document.getElementById("line-mount-2").innerHTML = "says completely";
    }
    let body = document.querySelector("body");
    body.style.backgroundColor = "rgb(32, 32, 32)";
    body.style.color = "white";
  }

  setBrightMode(img, tooltip) {
    img.setAttribute("class", "mode-switch mode-dark tooltip");
    tooltip.innerHTML = "Dark mode";
    document
      .querySelector("nav")
      .setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-light fixed-top animated fadeInDown"
      );
    document
      .getElementById("logoN")
      .setAttribute("class", "nav-link black-font");
    if (this.state.did_mount) {
      document
        .getElementById("prizes-wrap")
        .setAttribute("class", "center prizes-bright");
      document
        .getElementById("quotes-wrap")
        .setAttribute("class", "quotes-bright");

      let opts = document.getElementsByClassName("opt");
      for (let i = 0; i < opts.length; i++) {
        opts[i].setAttribute("class", "opt opt-bright");
      }

      document
        .getElementById("mountains")
        .setAttribute("class", "row mount-bg");
      document.getElementById("line-mount-1").innerHTML = "These mountains";
      document.getElementById("line-mount-2").innerHTML = "say completely";
    }
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
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
          id="logoN"
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
            <li className="mode-wrap">
              <div
                id="color-switch"
                className="mode-switch mode-dark tooltip"
                onClick={this.onSwitchMode}
              >
                <span id="color-swtich-tooltip" className="tooltiptext">
                  Dark mode
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
