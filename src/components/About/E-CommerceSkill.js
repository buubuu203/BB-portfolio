import React from "react";
import { Col, Row } from "react-bootstrap";

function ECommerceSkill() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="ec-icons">
        Marketing
      </Col>
      <Col xs={4} md={2} className="ec-icons">
        Sale
      </Col>
      <Col xs={4} md={2} className="ec-icons">
        BPMN
      </Col>
      <Col xs={4} md={2} className="ec-icons">
        CRM
      </Col>
      <Col xs={4} md={2} className="ec-icons">
        ERP
      </Col>
    </Row>
  );
}

export default ECommerceSkill;
