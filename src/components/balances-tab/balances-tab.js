import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import DataChart from "../datachart/datachart";
import PorfolioRow from "../porfolio-row/porfolio-row";
const buttonStyle = {
  width: "100%",
};

const BalancesTab = ({ handleTradeClick }) => {
  return (
    <>
      <Row>
        <Col>
          <Container className="mb-3">
            <h1 className="text-info text-center mb-0">$3010.00</h1>
            <h6 className="text-muted text-center">Up $10</h6>
          </Container>
        </Col>
      </Row>
      <Row></Row>
      <DataChart />
      <Row>
        <Col sm={12} md={6} className="mt-3">
          <Row>
            <Col sm={8}>
              <h6 className="text-muted mb-0">Available Cash:</h6>
              <h2 className="text-info mb-0">$3000.23</h2>
            </Col>
            <Col className="d-flex align-items-center">
              <Button
                className="w-100"
                variant="outline-success"
                onClick={() => {}}
              >
                Deposit
              </Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6} className="mt-3">
          <Row>
            <Col sm={8}>
              <h6 className="text-muted mb-0">Market Value of Securities:</h6>
              <h2 className="text-info mb-0">$3000.23</h2>
            </Col>
            <Col className="d-flex align-items-center">
              <Button
                className="w-100"
                variant="outline-success"
                onClick={handleTradeClick}
              >
                Trade
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <h4 className="text-muted mt-3 mb-0">Porfolio:</h4>
      <PorfolioRow increased ticker="fb" currentValue="123"></PorfolioRow>
    </>
  );
};
export default BalancesTab;
