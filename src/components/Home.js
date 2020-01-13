import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "../styles/home.css";

class Mouse {
  constructor() {
    this._x = 0;
    this._y = 0;
    this.delta_x = 0;
    this.delta_y = 0;
    this.elem_pos_x = 0;
    this.elem_pos_y = 0;
    this.center_x = 0;
    this.center_y = 0;
  }

  setCardPos(x, y, scrollY) {
    this.elem_pos_x = x;
    this.elem_pos_y = y - scrollY;
  }

  updatePosition(clientX, clientY) {
    this.delta_x = (clientX - this.center_x) * 0.15;
    this.delta_y = (clientY - this.center_y) * -0.15;
  }
  setOrigin(offsetLeft, offsetTop, offsetWidth, offsetHeight) {
    this._x = offsetLeft + Math.floor(offsetWidth / 2);
    this._y = offsetTop + Math.floor(offsetHeight / 2);
    this.center_x = this._x + this.elem_pos_x;
    this.center_y = this._y + this.elem_pos_y;
  }
}

const mouse = new Mouse();
const updateRate = 10;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0, counter: 0 };
  }

  getPos(el) {
    for (
      var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
    );
    return { x: lx, y: ly };
  }

  componentDidMount() {
    setTimeout(() => {
      var c = document.getElementById("line-6");
      var offsetWidth;
      var offsetHeight;
      var pos = this.getPos(document.getElementById("right-half"));

      window.onscroll = e => {
        this.setScrollY(window.scrollY, pos);
      };

      mouse.setCardPos(pos.x, pos.y, this.state.scrollY);

      c.addEventListener("mouseover", event => {
        offsetHeight = c.offsetHeight;
        offsetWidth = c.offsetWidth;
        mouse.setOrigin(c.offsetLeft, c.offsetTop, offsetWidth, offsetHeight);
        this.update(event.clientX, event.clientY);
      });

      c.addEventListener("mousemove", event => {
        if (this.isTimeToUpdate()) {
          this.update(event.clientX, event.clientY);
        }
      });

      c.addEventListener("mouseleave", () => {
        c.removeAttribute("style");
      });
    }, 100);
  }

  setScrollY(value, pos) {
    this.setState(
      {
        scrollY: `${value}`
      },
      () => {
        mouse.setCardPos(pos.x, pos.y, this.state.scrollY);
      }
    );
  }

  isTimeToUpdate() {
    let i = Number(this.state.counter) + 1;
    this.setState({
      counter: `${i}`
    });
    return i % updateRate === 0;
  }
  update(clientX, clientY) {
    mouse.updatePosition(clientX, clientY);
    this.updateTransformStyle(
      (mouse.delta_y / 1).toFixed(2),
      (mouse.delta_x / 1).toFixed(2)
    );
  }
  updateTransformStyle(x, y) {
    x = Number(x).toString();
    y = Number(y).toString();
    var element = document.getElementById("line-6");
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    element.style.transform = style;
    element.style.webkitTransform = style;
    element.style.mozTransform = style;
    element.style.msTransform = style;
    element.style.oTransform = style;
  }

  render() {
    return (
      <div className="home-page">
        <Element id="home" name="home">
          <div className="row" id="home-row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <h1 id="line-1" className="animated fadeIn">
                Finally ready to present to you
              </h1>
              <h1 id="line-2" className="animated fadeIn">
                an unique product
              </h1>
              <h1 id="line-3" className="animated fadeIn">
                which is inevitable part of existence
              </h1>
              <h1 id="line-4" className="animated fadeIn">
                and it is our new...
              </h1>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"
              id="right-half"
            >
              <div id="line-6" className="animated fadeIn rect-move">
                Nothing.
                <p id="com">Nothing to hover</p>
              </div>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default Home;
