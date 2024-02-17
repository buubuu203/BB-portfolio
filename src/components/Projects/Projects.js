import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import appleStore from "../../assets/Projects/appleStore.png";
import eliteFitness from "../../assets/Projects/eliteFitness.png";
import nikeWebsite from "../../assets/Projects/nikeWebsite.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

// Destructuring props directly in ProjectCard
function Projects() {
  const projectsData = [
    {
      imgPath: eliteFitness,
      isBlog: false,
      title: "Elite Fitness",
      description:
        "The project that take the 1st rank in Advanced Information Systems Contest 2023",
      ghLink: "https://github.com/thienenpi/EliteFitness",
      viewMore:
        "https://tuyensinh.uit.edu.vn/chung-ket-aisc-2023-giai-nhat-cuoc-thi-goi-ten-doi-double-kill-va-findy?fbclid=IwAR2ITwUFsuCOmMZqbZPUxFM83Kohud0wc5UGcve4oi8i5tqSAp050xiNV7Q",
    },
    {
      imgPath: appleStore,
      isBlog: false,
      title: "Apple Store",
      description:
        "My project of IS207.O13 course at UIT, it's a fullstack E-Commerce Website using React, PHP, MySQL,...",
      ghLink: "https://github.com/buubuu203/apple-store-is207",
    },
    {
      imgPath: nikeWebsite,
      isBlog: false,
      title: "Nike Website",
      description:
        "A basic website of Nike, built with the instruction from JSmastery",
      ghLink: "https://github.com/buubuu203/nike-website",
      demoLink: "https://nike-website-dusky.vercel.app/",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        <h1 className="project-heading">
          All of my <strong className="purple">Projects </strong>
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1COPKlBVoXYCJGSDGtn_sNdn6AkJThpPNo0kEzf3d310/edit?usp=sharing"
        >
          Click here
        </a>
      </Container>
    </Container>
  );
}

export default Projects;
