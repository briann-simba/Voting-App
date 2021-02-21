import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class Login extends Component {
    render() {
        return ( < div className = "formContainer"
            style = {
                { height: '50vh', borderRadius: "25px" }
            } > <
            Form >
            <
            Form.Label > < h1 > Verification < /h1></Form.Label >
            <
            Form.Group controlId = "formGridIdNumber" >
            <
            Form.Label > Phone Number < /Form.Label> <
            Form.Control name = "phone"
            placeholder = "Enter your Phone Number in this format e.g +254" / >
            <
            /Form.Group>



            <
            Button className = "cta"
            style = {
                { backgroundColor: 'green', borderRadius: "25px" }
            }
            variant = "primary"
            type = "submit" >
            Generate Verification Code <
            /Button> <p><small>A 6-digit verification code will be sent to your phone number</small > < /p> < /
            Form > < /div > )
        }
    }

    export default Login