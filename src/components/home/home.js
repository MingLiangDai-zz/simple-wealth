import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import DataChart from "../datachart/datachart";
const Home = () => {
  return (
    <Container>
      <h1 className="text-info text-center">Welcome to Simple Wealth</h1>
      <h5 className="text-muted text-center">
        Get started with the button below!
      </h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="sign-up">
          <Button variant={"outline-success"}>Get Started!</Button>
        </Link>
      </div>

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

export default Home;
