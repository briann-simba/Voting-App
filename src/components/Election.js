import { render } from '@testing-library/react'
import { React, useState, useEffect, Component } from 'react'
import { Card, Accordion, Button, Dropdown, Modal } from 'react-bootstrap'



class Election extends Component {

    constructor(props) {
        super(props)

        this.state = {
            election: [],
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    componentDidMount() {
        this.setState({}, () => {
            fetch("http://localhost:4000/election")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        election: result

                    })

                )
                .catch(console.log);

        })
    }




    render() {

        const { election } = this.state
        console.log(election)
        const electionCard = election.map(e => {
                return ( < div key = { e.electionId } >
                    <
                    div className = "row" >
                    <
                    div className = "col-lg-4 mb-4" >
                    <
                    div className = "card"
                    style = {
                        { borderRadius: "25px" }
                    } >
                    <
                    img className = "card-img-top"
                    style = {
                        { borderRadius: "25px" }
                    }
                    src = "https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fHByZXNpZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt = "" / >

                    <
                    div className = "card-body" >
                    <
                    h5 className = "card-title" > { e.electionName }
                    Elections < /h5><h5>StartTime:{e.startDate}EndTime:{e.stopDate} 




                    <
                    /h5 >  <
                    p className = "card-text" > Click below to see the positions being contested <
                    /p > < Dropdown > < Dropdown.Toggle variant = "success"
                    id = "dropdown-basic" >
                    Positions Being Contested For < /Dropdown.Toggle>

                    <
                    Dropdown.Menu >
                    <
                    Dropdown.Item href = "#"
                    onClick = { this.showModal } >
                    Presidential Elections < /Dropdown.Item> <
                    Dropdown.Item href = "#/action-2" > Gubernatorial < /Dropdown.Item>  < /
                    Dropdown.Menu > < /
                    Dropdown > < /
                    div > < /
                    div > <
                    /div></div > < /div> )

                })

            return ( < div > { electionCard } <
                Modal style = {
                    { overflow: "scroll" }
                }
                show = { this.state.show }
                onHide = { this.hideModal }
                backdrop = "static"
                keyboard = { false } > <
                Modal.Header closeButton >
                <
                Modal.Title > < center > Vying Candidates < /center> < /Modal.Title > < /
                Modal.Header > <
                Modal.Body >

                <
                Card style = {
                    { width: "18rem", margin: "auto", marginBottom: "50px", justifyContent: "center", display: "block", textAlign: "center" }
                } >
                <
                Card.Img variant = "top"
                src = "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /
                >
                <
                Card.Body >
                <
                Card.Title > Hughie Jackson < /Card.Title><
                Button variant = "success" >
                Vote <
                /Button> < /
                Card.Body > <
                /Card>

                <
                Card style = {
                    { width: "18rem", margin: "auto", justifyContent: "center", display: "block", textAlign: "center" }
                } >
                <
                Card.Img variant = "top"
                src = "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /
                >
                <
                Card.Body >
                <
                Card.Title > Hughie Jackson < /Card.Title><
                Button variant = "success" >
                Vote <
                /Button> < /
                Card.Body > <
                /Card>


                <
                /
                Modal.Body > < /Modal> </div >
            )

        }
    }

    export default Election