import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Buu Dang </span>
            from <span className="purple">UIT - VNU-HCM</span>
            <br /> I am a junior student whose major is E-Commerce.
            <br />
            Additionally, I am seeking for an intern position in Business
            Analyst or Product Owner.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton, Hitting gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "#54C68C" }}>"Life is short, don't be lazy" </p>
          <footer className="blockquote-footer">Buu Buu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
