import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      login_object: [],
      idNumber: "",
      gen_code: "",
    };
    this.handleForm = this.handleForm.bind(this);
    this.idRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleForm = (event) => {
    event.preventDefault();

    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // *default, no-cache, reload, force-cache, only-if-cached
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return [response.json(), response.status];
      // parses JSON response into native JavaScript objects
    }

    postData("https://api.elokiravote.ml/users/login/request", {
      idNumber: this.state.idNumber,
    }).then((data) => {
      console.log(data[0]);
      console.log(data[1]);
      const mydata = data[0];
      const mystatus = data[1];
      this.setState({ login_object: mydata }); // JSON data parsed by `data.json()` call
      console.log(mydata[1]);
      if (mystatus === 200) {
        this.setState({ showModal: true });
      }
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state.login_object);
    console.log(this.state.idNumber);
    return (
      <div
        className="formContainer"
        style={{
          height: "40vh",
          borderRadius: "25px",
          marginTop: "80px",
          justifyContent: "center",
          display: "block",
          textAlign: "center",
        }}
      >
        {" "}
        <Form onSubmit={this.handleForm}>
          <Form.Label>
            {" "}
            <h2> Login </h2>
          </Form.Label>
          <Form.Row>
            {" "}
            <Form.Group as={Col} controlId="NationalId">
              <Form.Control
                name="idNumber"
                onChange={this.handleChange}
                placeholder="Enter your National ID Number "
              />
            </Form.Group>{" "}
          </Form.Row>
          <Button
            className="cta"
            style={{ backgroundColor: "green", borderRadius: "25px" }}
            variant="primary"
            type="submit"
          >
            Generate Verification Code{" "}
          </Button>{" "}
          <p style={{ marginTop: "30px" }}>
            <p>
              <small style={{ marginTop: "40px" }}>
                A 6-digit verification code will be sent to your phone number
              </small>
            </p>{" "}
          </p>{" "}
        </Form>
        <Modal
          style={{ overflow: "scroll", width: "100%" }}
          show={this.state.show}
          onHide={this.hideModal}
          backdrop="static"
          keyboard={false}
        >
          {" "}
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <center> One-Time Verification Code </center>{" "}
            </Modal.Title>{" "}
          </Modal.Header>{" "}
          <Modal.Body>
            <Form>
              <Form.Label>
                {" "}
                <h1> Enter the 6 digit code that has been sent to you</h1>
              </Form.Label>
              <Form.Group controlId="formGridIdCode">
                <Form.Control name="code" placeholder="Enter the sent code" />
              </Form.Group>
              <Button
                className="cta"
                style={{ backgroundColor: "green", borderRadius: "25px" }}
                variant="primary"
                type="submit"
              >
                Submit{" "}
              </Button>{" "}
            </Form>{" "}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Login;
