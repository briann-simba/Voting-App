import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import history from "./history";
import Verification from "./Verification";
import { withRouter } from "react-router-dom";
import { Card, Dropdown, Modal } from "react-bootstrap";

class Registration extends Component {
  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);

    //   this.state = {
    //     id: null,
    //     fName: "",
    //     lName: "",
    //     phone: "",
    //     pass: "",
    //     passAgain: "",
    //     submitted: false,
    //   };
    // }

    this.state = {
      id: "",
      fName: "",
      registration_object: [],
      verification_object: [],
      showModal1: false,
      showModal2: false,
      phoneNumber: "",
    };
    this.SubmitReg = this.SubmitReg.bind(this);
    this.submitVer = this.submitVer.bind(this);
    this.idRef = React.createRef();
    this.nameRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  SubmitReg(event) {
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

    postData("https://api.elokiravote.ml/users/verify", {
      idNumber: this.idRef.current.value,
      firstName: this.nameRef.current.value,
    }).then((data) => {
      console.log(data[0]);
      console.log(data[1]);
      this.setState({ registration_object: data[0] }); // JSON data parsed by `data.json()` call
      if (data[1] === 200) {
        this.setState({ showModal1: true });
        alert("National Id verified. Validate your profile below");
      } else if (data[1] === 403) {
        alert("Please check your first name or ID number and try again");
      } else {
        alert("You already have an account.Click OK to proceed to login");
        this.props.history.push("/UserLogin");
      }
    });
  }
  hideModal1 = () => {
    this.setState({ showModal1: false });
  };
  hideModal2 = () => {
    this.setState({ showModal2: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitVer(event) {
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
      return response.json();
      // parses JSON response into native JavaScript objects
    }

    postData("https://api.elokiravote.ml/users", {
      firstName: this.state.registration_object[0],
      lastName: this.state.registration_object[2],
      idNumber: this.state.registration_object[1],
      phoneNumber: this.state.phoneNumber,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data[1])
        this.setState({ verification_object: data }); // JSON data parsed by `data.json()` call
        if (data[1] === 200) {
          this.setState({ showModal2: true });
        }
      });
  }

  render() {
    console.log(this.state.registration_object);
    // console.log(this.state.phoneNumber)

    return (
      <div
        className="formContainer"
        style={{
          height: "50vh",
          borderRadius: "25px",
          marginTop: "80px",
          justifyContent: "center",
          display: "block",
          textAlign: "center",
        }}
      >
        <Form method="POST" onSubmit={this.SubmitReg}>
          <Form.Label>
            <h1> Register </h1>
          </Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFName">
              <Form.Label> First Name </Form.Label>
              <Form.Control
                type="text"
                name="fName"
                ref={this.nameRef}
                placeholder="Enter your First Name"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridIdNumber">
              <Form.Label> National ID Number </Form.Label>
              <Form.Control
                name="id"
                type="text"
                ref={this.idRef}
                placeholder="Enter your National ID Number"
              />
            </Form.Group>
          </Form.Row>
          <Button
            className="cta"
            style={{ backgroundColor: "green", borderRadius: "25px" }}
            variant="primary"
            type="submit"
          >
            Validate
          </Button>
        </Form>
        <Modal
          style={{ overflow: "scroll", width: "100%" }}
          show={this.state.showModal1}
          onHide={this.hideModal1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <center> Please verify Login Request</center>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitVer}>
              <Form.Label>
                <h1> Verification </h1>
              </Form.Label>
              <Form.Group controlId="formGridIdNumber">
                <Form.Label> Phone Number </Form.Label>
                <Form.Control
                  name="phoneNumber"
                  onChange={this.handleChange}
                  placeholder="Enter your Phone Number in this format e.g +254"
                />
              </Form.Group>
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
          </Modal.Body>
        </Modal>
        <Modal
          style={{ overflow: "scroll", width: "100%" }}
          show={this.state.showModal2}
          onHide={this.hideModal2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <center> One-Time Verification Code </center>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>
                <h1> Enter the 6 digit code that has been sent to you</h1>
              </Form.Label>
              <Form.Group controlId="formGridIdCode">
                <Form.Control
                  name="code"
                  refs={this.codeRef}
                  placeholder="Enter the sent code"
                />
              </Form.Group>
              <Button
                className="cta"
                style={{ backgroundColor: "green", borderRadius: "25px" }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Registration);
