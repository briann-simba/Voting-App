import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class Login extends Component {
    render() {
        return ( < div className = "formContainer"
            style = {
                { height: '50vh' }
            } > <
            Form >
            <
            Form.Label > < h1 > Login < /h1></Form.Label >
            <
            Form.Group controlId = "formGridIdNumber" >
            <
            Form.Label > National ID Number < /Form.Label> <
            Form.Control name = "id"
            placeholder = "Enter your National ID Number" / >
            <
            /Form.Group>


            <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridPasswordAgain" >
            <
            Form.Label > Password < /Form.Label> <
            Form.Control name = "passAgain"
            type = "password"
            placeholder = "Enter Password Again" / >
            <
            /Form.Group></Form.Row >



            <
            Button className = "cta"
            style = {
                { backgroundColor: '#141e30' }
            }
            variant = "primary"
            type = "submit" >
            Submit <
            /Button> < /
            Form > < /div > )
        }
    }

    export default Login