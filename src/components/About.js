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
        <ScrollAnimation delay={100} animateOnce={true} animateIn="fadeIn">
          <h1 className="heading" id="about-heading">
            What is Nothing?
          </h1>
        </ScrollAnimation>
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
            style={{ textAlign: "justify" }}
          >
            <ScrollAnimation delay={500} animateOnce={true} animateIn="fadeIn">
              Insert here some
              <span className="spin">funny joke </span>
              about Nothing being a thing. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas tincidunt enim vehicula
              lectus scelerisque, vitae rhoncus quam lobortis. Pellentesque quis
              congue augue. Aenean facilisis sit amet tortor eu tempor. In
              laoreet non diam vel tincidunt. Curabitur aliquam efficitur
              pretium. Vivamus ut justo erat.
            </ScrollAnimation>
            <br />
            <ScrollAnimation delay={1500} animateOnce={true} animateIn="fadeIn">
              Remember to add picture of random people looking really
              profesionall.
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 center">
            <ScrollAnimation delay={1500} animateOnce={true} animateIn="fadeIn">
              <div className="pros-wrap center">
                <img id="pros" src={pros} alt="Pro people" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default About;
