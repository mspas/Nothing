import React from "react";
import "../App.css";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="row" id="home-row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <h1 id="line-1" className="animated fadeIn">
              Finally ready to present to you
            </h1>
            <h1 id="line-2" className="animated fadeIn">
              an unique product
            </h1>
            <h1 id="line-3" className="animated fadeIn">
              which always was with you and will be
            </h1>
            <h1 id="line-4" className="animated fadeIn">
              and it is brand new...
            </h1>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"
            id="right-half"
          >
            <div id="line-6" className="animated fadeIn rect-round">
              Nothing.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
