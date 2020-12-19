import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import not_available from "../../img/not_available.svg";
const NotAvailable = () => {
  const svg_style = {
    width: "100%",
    maxWidth: "500px",
  };
  return (
    <Container>
      <h2 className="text-info text-center">Feature not yet available...</h2>
      <div className="d-flex justify-content-center">
        <img src={not_available} style={svg_style} />
      </div>
    </Container>
  );
};
export default NotAvailable;
