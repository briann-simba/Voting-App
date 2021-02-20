import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
class Registration extends Component {
  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);

    // this.SubmitReg = this.SubmitReg.bind(this)

    this.state = {
      id: null,
      fName: "",
      lName: "",
      phone: "",
      pass: "",
      passAgain: "",
      submitted: false,
    };
  }

  //   onChangeHandler(e) {
  //     this.setState({
  //       [e.target.name]:[e.target.value]
  //     });
  //   }

  //   SubmitReg() {
  //     var data = {
  //         id:this.state.id,
  //         fName:this.state.fName,
  //         lName:this.state.lName,
  //         phone:this.state.phone,
  //         pass:this.state.pass,
  //         passAgain:this.state.passAgain
  //     };

  //     VotingDataService.register(data)
  //       .then(response => {
  //         this.setState({
  //             id:response.data.id,
  //             fName:response.data.fName,
  //             lName:response.data.lName,
  //             phone:response.data.phone,
  //             pass:response.data.pass,
  //             passAgain:response.data.passAgain,
  //           submitted: true
  //         });
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }

  render() {
    return (
      <div
        className="formContainer"
        style={{ borderRadius: "25px", marginTop: "100px", height: "400px" }}
      >
        <Form>
          <Form.Label>
            <h1> Register </h1>
          </Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFName">
              <Form.Label> First Name </Form.Label>
              <Form.Control
                type="text"
                name="fName"
                placeholder="Enter your First Name"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridIdNumber">
              <Form.Label> National ID Number </Form.Label>
              <Form.Control
                name="id"
                placeholder="Enter your National ID Number"
              />
            </Form.Group>
          </Form.Row>
          <Button
            className="cta"
            style={{ backgroundColor: "#141e30" }}
            variant="primary"
            type="submit"
          >
            Validate
          </Button>
        </Form>
      </div>
    );
  }
}

export default Registration;
