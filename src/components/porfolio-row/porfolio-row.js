import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const rowStyle = {
  borderStyle: "none none none solid",
};

const PorfolioRow = ({ increased, ticker, currentValue, change }) => {
  const textColor = increased ? " text-success" : " text-danger";
  return (
    <div style={rowStyle} className={"py-1 px-2 my-1" + textColor}>
      <Row>
        <Col sm={8}>
          <h4>{(ticker || "N/A").toUpperCase()}</h4>
        </Col>
        <Col sm={4} className="d-flex justify-content-end align-items-center">
          <h6>
            {increased ? "+" : "-"}${change || "0"}
          </h6>
          <h4 className="text-right pl-3">${currentValue || "0"}</h4>
        </Col>
      </Row>
    </div>
  );
};
export default PorfolioRow;
