import React from "react";
import "../App.css";
import "../styles/quotes.css";
import einstein from "../einstein.png";
import curie from "../curie.png";
import lincoln from "../lincoln.png";

function Quotes() {
  return (
    <div className="center" id="quotes-wrap">
      <ul className="list-unstyled">
        <li className="media">
          <img
            src={einstein}
            width="100px"
            height="100px"
            alt="Albert Einstein"
          />
          <div className="media-body">
            <p className="author">
              <i className="fas fa-quote-left quote-ico"></i>~ Albert Einstein
            </p>
          </div>
        </li>
        <li className="media my-4">
          <div className="media-body">
            <p className="author author-right">
              <i className="fas fa-quote-left quote-ico"></i>~ Abraham Lincoln
            </p>
          </div>
          <img
            src={lincoln}
            width="100px"
            height="100px"
            alt="Abraham Lincoln"
          />
        </li>
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
      </ul>
    </div>
  );
}

export default Quotes;
