import React from "react";
import "../App.css";
import "../styles/prizes.css";

class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }

  hoverOpiton = ev => {
    this.setState({
      id_hover: `${ev.currentTarget.id.slice(3, 4)}`
    });
    let id = "btn" + this.state.id_hover;
    if (id.length < 5) {
      console.log(id);
      document
        .getElementById(id)
        .setAttribute("className", "button button-hover");
    }
  };

  leaveOption() {
    for (let i = 0; i < 3; i++) {
      document
        .getElementById("btn" + i.toString())
        .setAttribute("className", "button");
    }
  }

  render() {
    return this.state.hidden ? (
      ""
    ) : (
      <div className="center" id="prizes-wrap">
        <div
          className="opt"
          id="opt1"
          onMouseOver={this.hoverOpiton}
          onMouseLeave={this.leaveOpiton}
        >
          <h2 style={{ marginBottom: 50 }}>Basic Nothing.</h2>
          <h3>$29.99</h3>
          <ul>
            <li>Nothing.</li>
            <li>Without shipment of Nothing.</li>
          </ul>
          <div className="opt-footer">
            <button href="" id="btn1" className="button">
              order
            </button>
          </div>
        </div>
        <div
          className="opt"
          id="opt2"
          onMouseOver={this.hoverOpiton}
          onMouseLeave={this.leaveOpiton}
        >
          <h2 style={{ marginBottom: 50 }}>Nothing+.</h2>
          <h3>$39.99</h3>
          <ul>
            <li>Nothing but more expensive and worse quality</li>
            <li>How do you want ship Nothing?</li>
          </ul>
          <div className="opt-footer">
            <button href="" id="btn2" className="button">
              order
            </button>
          </div>
        </div>
        <div
          className="opt"
          id="opt3"
          onMouseOver={this.hoverOpiton}
          onMouseLeave={this.leaveOpiton}
        >
          <h2 style={{ marginBottom: 50 }}>Premium Nothing.</h2>
          <h3>$59.99</h3>
          <ul>
            <li>Literally Nothing.</li>
            <li>It won't have a Supreme logo so it's like premium Nothing.</li>
          </ul>
          <div className="opt-footer">
            <button href="" id="btn3" className="button">
              order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Prizes;
