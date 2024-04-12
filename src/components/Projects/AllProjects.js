import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import appleStore from "../../assets/Projects/appleStore.png";
import eliteFitness from "../../assets/Projects/eliteFitness.png";
import paradise from "../../assets/Projects/paradise.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

// Destructuring props directly in ProjectCard
function AllProjects() {
  const projectsData = [
    {
      imgPath: eliteFitness,
      isBlog: false,
      title: "Elite Fitness",
      description:
        "The project that take the 1st rank in Advanced Information Systems Contest 2023",
      ghLink: "https://github.com/thienenpi/EliteFitness",
      figmaLink:
        "https://www.figma.com/file/GIMlKe1e7WoQvL9tliZhXN/Elite-Fitness-v2.0?type=design&node-id=586%3A11276&mode=design&t=VqSYo4Os79xYtWWx-1",
      viewMore:
        "https://tuyensinh.uit.edu.vn/chung-ket-aisc-2023-giai-nhat-cuoc-thi-goi-ten-doi-double-kill-va-findy?fbclid=IwAR2ITwUFsuCOmMZqbZPUxFM83Kohud0wc5UGcve4oi8i5tqSAp050xiNV7Q",
    },
    {
      imgPath: paradise,
      isBlog: false,
      title: "Paradise - Hotel Management Application",
      description:
        "A hotel management application for manager and staff to keep track of their hotel",
      ghLink: "https://github.com/buubuu203/nike-website",
      figmaLink:
        "https://www.figma.com/file/0cIkD0nFPkkenffcfJDC0R/Paradise-v2.0?type=design&node-id=1724%3A3976&mode=design&t=2RQ0bIwD11wADviB-1",
    },
    {
      imgPath: appleStore,
      isBlog: false,
      title: "Apple Store",
      description:
        "My project of IS207.O13 course at UIT, it's a fullstack E-Commerce Website using React, PHP, MySQL,...",
      ghLink: "https://github.com/buubuu203/apple-store-is207",
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
      </Container>
    </Container>
  );
}

export default AllProjects;
