import React from "react";
import { Container, Card, Form, Col, Row, Button } from "react-bootstrap";

const SignInSignUp = ({ signUp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/not-available";
  };

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card className="w-75 rounded shadow-lg">
          <Card.Header className="bg-info text-light">
            <Card.Title className="text-center m-0">
              Sign {signUp ? "up for free" : "in"}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column lg={2}>
                  Email
                </Form.Label>
                <Col lg={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column lg={2}>
                  Password
                </Form.Label>
                <Col lg={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              {signUp ? (
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column lg={2}>
                    Confirm Password
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Col>
                </Form.Group>
              ) : null}
              <Button variant="info" type="submit">
                {signUp ? "Sign Up" : "Sign In"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SignInSignUp;
