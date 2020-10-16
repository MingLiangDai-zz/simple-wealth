import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import DataChart from "../datachart/datachart";
import "./board.css";
const buttonStyle = {
  width: "100%",
};
// d-flex flex-wrap justify-content-between
const Board = ({ userName }) => {
  return (
    <Container fluid style={{ maxWidth: "1440px" }}>
      <Card className="shadow border-info border-bottom-0 border-top-0 border-right-0 rounded text-muted py-2 pl-2">
        <Row>
          <Col md={8} sm={12}>
            <h3 className="title">
              Welcome back <span className="text-info">{userName}</span>!
            </h3>
          </Col>
          <Col>
            <Row>
              <Col>
                <Button style={buttonStyle} variant="outline-success">
                  Buy
                </Button>
              </Col>
              <Col>
                <Button style={buttonStyle} variant="outline-danger">
                  Sell
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      <Card className="p-4 rounded shadow-lg mt-2">
        <Card.Title className="text-center">
          Number one online trading platform in Canada
        </Card.Title>
        <DataChart />
      </Card>
      <Row>
        <Col sm={12} md={6}>
          <Card className="p-4 rounded shadow-lg mt-2">
            <Card.Title as="h6" className="text-center">
              Real-time data on stocks traded on the TSX, NYSE, Nasdaq
            </Card.Title>
            <DataChart />
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="p-4 rounded shadow-lg mt-2">
            <Card.Title as="h6" className="text-center">
              Trade with friends and compare portolios
            </Card.Title>
            <DataChart />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
