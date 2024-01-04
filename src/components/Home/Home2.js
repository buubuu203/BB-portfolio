import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avt.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Hello! I'm Buu Dang

A girl who is

Studing at University of Information Technology
And I'm looking for a job

I want to apply for a business analyst intern
Currently, I'm a junior at UIT - VNU HCM, major in E-Commerce
I have an open mind and desire to work in a young and dynamic environment.
Always accept challenges and upgrade myself every day.
Hope that we can work together in the future! */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>LET ME INTRODUCE MYSELF</h1>
            <p className="home-about-body">
              Currently, I'm a junior at UIT - VNU HCM, major in E-Commerce, I
              consider myself as a person who… 🤷‍♂️
              <br />
              <br />
              Always accept challenges and upgrade myself every day.
              <br />
              <br />I have an open mind and desire to work in a young and
              dynamic environment.
              <br />
              <br />
              Hope that we can work together in the future!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/buubuu203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://facebook.com/buu.buu.9083"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dangchau2003/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/buubuu.u"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
