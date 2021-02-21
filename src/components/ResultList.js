import axios from 'axios'
import React, { Component } from 'react'
import CountdownTimer from 'react-component-countdown-timer'

class ResultList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        var settings = {
            count: 5432,
            border: true,
            showTitle: true,
            noPoints: true,
        };

        return ( < div id = "cont_modal"
            style = {
                { display: "block", width: "20%", marginLeft: "40%" }
            } >

            <
            span style = {
                { color: "green" }
            } > Results will be out in: < /span> <
            CountdownTimer {...settings }
            border responsive / > <
            /div> 
        )
    }
}

export default ResultList