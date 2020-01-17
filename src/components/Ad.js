import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../App.css";
import "../styles/ad.css";

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }
  render() {
    return this.state.hidden ? (
      ""
    ) : (
      <div id="wrap">
        <div className="row mount-bg" id="mountains">
          <ScrollAnimation delay={500} animateOnce={true} animateIn="fadeIn">
            <h1 id="line-mount-1">These mountains</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={1500} animateOnce={true} animateIn="fadeIn">
            <h1 id="line-mount-2">say completely</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={2500} animateOnce={true} animateIn="fadeIn">
            <h1 id="line-mount-3">Nothing.</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={3500} animateOnce={true} animateIn="fadeIn">
            <h1 id="line-mount-4">It's fine.</h1>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Ad;
