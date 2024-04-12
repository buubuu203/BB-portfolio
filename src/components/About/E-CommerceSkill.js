import React from "react";
import { Col, Row } from "react-bootstrap";

const arr = ["Marketing", "Sales", "BPMN", "CRM", "ERP", "SCM", "BDA"];
function ECommerceSkill() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {arr.map((item) => (
        <Col xs={4} md={2} className="ec-icons">
          {item}
        </Col>
      ))}
    </Row>
  );
}
export default ECommerceSkill;
