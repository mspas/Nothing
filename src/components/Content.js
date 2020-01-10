import React from "react";
import Ad from "./Ad";
import Quotes from "./Quotes";
import About from "./About";
import Prizes from "./Prizes";
import Contact from "./Contact";

class Content extends React.Component {
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
      <div>
        <Ad />
        <About id="about" />
        <Quotes />
        <Prizes id="buy" />
      </div>
    );
  }
}

export default Content;
