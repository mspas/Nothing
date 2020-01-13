import React from "react";
import Ad from "./Ad";
import Quotes from "./Quotes";
import About from "./About";
import Prizes from "./Prizes";

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
        <About />
        <Quotes />
        <Prizes />
        <footer>
          ~ Marcin Spasiński
          <br />
          2019
        </footer>
      </div>
    );
  }
}

export default Content;
