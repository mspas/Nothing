import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Element } from "react-scroll";
import "../App.css";
import "../styles/about.css";
import pros from "../assets/pros.jpg";

function About() {
  return (
    <div id="about-wrap">
      <Element id="about" name="about">
        <div id="rect"></div>
        <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
          <div className="row" id="row1">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h1 id="about-header">What is Nothing?</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 center text">
              Insert here some funny joke about Nothing being a thing. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt enim vehicula lectus scelerisque, vitae rhoncus quam
              lobortis pellentesque.
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
          <div className="row" id="row2">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 center padding0">
              <div className="pros-wrap center">
                <img id="pros" src={pros} alt="Pro people" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-sm">
              Remember to add picture of random people looking really
              professional.
            </div>
          </div>
          <p id="btn-show">Show nothing</p>
        </ScrollAnimation>
      </Element>
    </div>
  );
}

export default About;
