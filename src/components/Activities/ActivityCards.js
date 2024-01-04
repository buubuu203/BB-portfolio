import React from "react";
import Card from "react-bootstrap/Card";

function ActivityCards(props) {
  return (
    <Card className="activity-card-view">
      <Card.Img
        variant="top"
        src={props.imgURL}
        alt="card-img"
        style={{ width: 300 }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* ... other components */}
      </Card.Body>
    </Card>
  );
}

export default ActivityCards;
