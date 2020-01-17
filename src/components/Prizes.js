import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "../styles/prizes.css";

class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true, btn_value: null };
    this.onOrder = this.onOrder.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }

  onOrder = ev => {
    this.setState(
      {
        btn_value: `${ev.currentTarget.value}`
      },
      () => {
        this.displayMsg();
      }
    );
  };

  displayMsg() {
    let msg = this.state.btn_value + " happened";
    let e = document.getElementById("alert");
    e.innerHTML = msg;
    e.setAttribute("class", "animated fadeIn");
    setTimeout(() => {
      e.setAttribute("class", "animated fadeOut");
    }, 2000);
  }

  render() {
    return this.state.hidden ? (
      ""
    ) : (
      <div>
        <Element id="buy" name="buy">
          <div className="center prizes-bright" id="prizes-wrap">
            <div className="opt opt-bright">
              <h2 style={{ marginBottom: 50 }}>Basic Nothing.</h2>
              <h3>$29.99</h3>
              <ul className="features">
                <li>Nothing.</li>
                <li>Without shipment of Nothing.</li>
              </ul>
              <div className="opt-footer">
                <button
                  id="btn1"
                  className="button"
                  onClick={this.onOrder}
                  value="Basic Nothing."
                >
                  order
                </button>
              </div>
            </div>
            <div className="opt opt-bright">
              <h2 style={{ marginBottom: 50 }}>Nothing+.</h2>
              <h3>$39.99</h3>
              <ul className="features">
                <li>Nothing but more expensive and worse quality</li>
                <li>How do you want ship Nothing?</li>
              </ul>
              <div className="opt-footer">
                <button
                  id="btn2"
                  className="button"
                  onClick={this.onOrder}
                  value="Nothing+."
                >
                  order
                </button>
              </div>
            </div>
            <div className="opt opt-bright">
              <h2 style={{ marginBottom: 50 }}>Premium Nothing.</h2>
              <h3>$59.99</h3>
              <ul className="features">
                <li>Literally Nothing.</li>
                <li>
                  It won't have a Supreme logo so it's like premium Nothing.
                </li>
              </ul>
              <div className="opt-footer">
                <button
                  id="btn3"
                  className="button"
                  onClick={this.onOrder}
                  value="Premium Nothing."
                >
                  order
                </button>
              </div>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default Prizes;
