import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export class Vote extends Component {
    render() {
        return ( <
            Card style = {
                { width: '40%', color: 'turquoise', marginLeft: '36%', textAlign: 'center', height: '50vh' }
            } >
            <
            Card.Img src = "/assets/images/trump.jpg"
            variant = "top" /
            >
            <
            Card.Body >
            <
            Card.Title > Name Goes Here < /Card.Title> <Card.Text>Party Slogan goes here</Card.Text > <
            Button style = {
                { height: '2.1rem' }
            }
            variant = "success" >
            VOTE < /Button> <
            Card.Footer > < h1 > Vote Count: < /h1></Card.Footer > <
            /Card.Body> < /
            Card >
        )
    }
}

export default Vote