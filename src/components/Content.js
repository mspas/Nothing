import React from "react";
import Ad from "./Ad";
import Quotes from "./Quotes";
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
        <Ad id="about-nothing" />
        <Quotes id="quotes" />
      </div>
    );
  }
}

export default Content;
