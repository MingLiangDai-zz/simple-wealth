import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Search from "../search/search";
import DataChart from "../datachart/datachart";

const buttonStyle = {
  width: "100%",
};

const TradeTab = () => {
  return (
    <>
      <Row>
        <Col md={8} sm={12}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <Link to="/dashboard/buy">
                <Button style={buttonStyle} variant="outline-success">
                  Buy
                </Button>
              </Link>
            </Col>
            <Col>
              <Button style={buttonStyle} variant="outline-danger">
                Sell
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <DataChart />
    </>
  );
};
export default TradeTab;
