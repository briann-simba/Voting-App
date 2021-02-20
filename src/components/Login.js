import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div
        className="formContainer"
        style={{ height: "50vh", borderRadius: "25px", marginTop: "100px" }}
      >
        <Form>
          <Form.Label>
            <h2> Login </h2>
          </Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridIdNumber">
              <Form.Label> National ID Number </Form.Label>
              <Form.Control
                name="idno"
                placeholder="Enter your National ID No."
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formVerificationId">
              <Form.Control
                name="idno"
                placeholder="Enter the sent 6-digit verification code "
              />
            </Form.Group>
          </Form.Row>
          <Button
            className="cta"
            style={{ backgroundColor: "green", borderRadius: "25px" }}
            variant="primary"
            type="submit"
          >
            Generate Verification Code
          </Button>
          <p>
            <small>
              A 6-digit verification code will be sent to your phone number
            </small>
          </p>
        </Form>
      </div>
    );
  }
}

export default Login;
