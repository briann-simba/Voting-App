// import axios from 'axios'
// import history from './history'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import './Vote.css'
// import { Redirect } from 'react-router-dom'
class Vote extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            myList: [],
            isButtonDisabled: false
                // winner: [],
        }

        // this.getMax = this.getMax.bind(this);
        // this.getMaxOfJson = this.getMaxOfJson.bind(this)
    }


    componentDidMount() {
        this.setState({}, () => {
            fetch("http://localhost:4000/candidate")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        myList: result

                    })

                )
                .catch(console.log);

        })

    }



    castVote(id) {
        this.setState({
            isButtonDisabled: true
        })

        
        fetch("http://localhost:4000/candidate/" + id, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ votes: this.state.myList[id-1].votes + 1 })
            })
            .then(this.props.history.push('/Results'))

        .catch(error=>console.log(error))



    }




    //     fetch("http://localhost:4000/candidates/" +id,{
    //         method:"PUT",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(this.stat)

    // }
    // )
    // getMax(array, propName) {
    //     let max = 0
    //     let maxItem = null
    //     for (let i = 0; i < array.length; i++) {
    //         let item = array[i]
    //         if (item[propName] > max) {
    //             max = item[propName]
    //             maxItem = item
    //         }
    //     }
    //     return maxItem
    // }


    // getMaxOfJson(jsonalreadyparsed, property) {
    //     var max = null;
    //     for (var i = 0; i < jsonalreadyparsed.length; i++) {

    //         if (max == null) {

    //             max = jsonalreadyparsed[i][property];

    //         } else {

    //             if (parseFloat(jsonalreadyparsed[i][property]) > max) {

    //                 max = jsonalreadyparsed[i];

    //             }

    //         }

    //     }
    //     return max;
    // }

    render() {

            console.log(this.state.myList)
            const voting = this.state.myList.map(list => {
                        return ( <
                            Card key = { list.candidateId }
                            style = {
                                { width: "18rem", marginBottom: "20px", height: "60vh", marginLeft: "37%" }
                            } >
                            <
                            Card.Img variant = "top"
                            src = { list.logo }
                            /> <
                            Card.Body >
                            <
                            Card.Title > { list.candidateName} < /Card.Title> { list.positionName } <
                            Button disabled = { this.state.isButtonDisabled }
                            variant = "success"
                            onClick = {
                                () => this.castVote(list.candidateId)
                            } >
                            Vote <
                            /Button> < /
                            Card.Body > <
                            /Card>)})



                            // const results = this.getMax(this.state.myList, 'votes')
                            //     // console.log(results)
                            // const winnerArr = new Array(results)
                            //console.log(winnerArr)
                            // const res = winnerArr.f(winner => < ul > < /ul > )
                            //     console.log(res)

                            //console.log(this.state.winner)
                            // const output = this.state.winner.forEach(item => {
                            //             return ( < li key = { item.id } > { item.name.first } { item.name.last } < /  li > )})

                            // console.log(winnerArr)
                            return ( < div > { voting } < /div>)
                            }
                        }

                        export default Vote