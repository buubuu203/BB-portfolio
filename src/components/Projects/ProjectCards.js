import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {/* {!props.isBlog && props.demoLink ? (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        ) : (
          <Button
            variant="primary"
            href={props.viewMore}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"View More"}
          </Button>
        )} */}
        <Button variant="primary" href={props.figmaLink} target="_blank">
          <CgFigma /> &nbsp; Figma
        </Button>
        {"\n"}
        {props.viewMore ? (
          <Button
            variant="primary"
            href={props.viewMore}
            target="_blank"
            id="viewMore"
          >
            View More
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
