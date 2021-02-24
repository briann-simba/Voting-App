import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import   Registration from './Registration'

class Verification extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone: "",
            
        }
       this.phoneRef=React.createRef()
    }
    handleSubmission(event){
        event.preventDefault()

    
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              // *default, no-cache, reload, force-cache, only-if-cached
               // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
 // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }


    }
    
    


    render() {
    
        
        return ( < div className = "formContainer"
            style = {
                { height: '50vh', borderRadius: "25px" }
            } > <
            Form onSubmit={this.handleSubmission}>
            <
            Form.Label > < h1 > Verification < /h1></Form.Label >
            <
            Form.Group controlId = "formGridIdNumber" >
            <
            Form.Label > Phone Number < /Form.Label> <
            Form.Control refs={this.phoneRef} name = "phone"
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

    export default Verification