import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../App.css";
import "../styles/quotes.css";
import einstein from "../einstein.png";
import curie from "../curie.png";
import lincoln from "../lincoln.png";

function Quotes() {
  return (
    <div id="quotes-wrap">
      <ScrollAnimation delay={500} animateOnce={true} animateIn="fadeIn">
        <h1 className="heading">Sometimes everyone...</h1>
      </ScrollAnimation>
      <div className="center" id="quotes">
        <ul className="list-unstyled">
          <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
            <li className="media">
              <img
                src={einstein}
                width="100px"
                height="100px"
                alt="Albert Einstein"
              />
              <div className="media-body">
                <p className="author">
                  <i className="fas fa-quote-left quote-ico"></i>~ Albert
                  Einstein
                </p>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
            <li className="media my-5 media-right">
              <div className="media-body">
                <p className="author author-right">
                  <i className="fas fa-quote-left quote-ico"></i>~ Abraham
                  Lincoln
                </p>
              </div>
              <img
                src={lincoln}
                width="100px"
                height="100px"
                alt="Abraham Lincoln"
              />
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
            <li className="media">
              <img
                src={curie}
                width="100px"
                height="100px"
                alt="Maria Skłodowska-Curie"
              />
              <div className="media-body">
                <p className="author">
                  <i className="fas fa-quote-left quote-ico"></i>~ Maria
                  Skłodowska-Curie
                </p>
              </div>
            </li>
          </ScrollAnimation>
        </ul>
      </div>
      <ScrollAnimation delay={1500} animateOnce={true} animateIn="fadeIn">
        <h2 className="heading">needs a bit of Nothing.</h2>
      </ScrollAnimation>
    </div>
  );
}

export default Quotes;
