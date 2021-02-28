import axios from 'axios'
import React, { Component } from 'react'
import CountdownTimer from 'react-component-countdown-timer'
import {Card} from 'react-bootstrap'

class ResultList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myResult:[]

        }
    }
componentDidMount(){
    const token = localStorage.getItem('token')
        console.log(token)
        if (!token){
            alert("Please Sign Up First to View this Page")
            this.props.history.push('/Register')
        }
        this.setState({}, () => {
            fetch("http://localhost:4000/candidate")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        myResult: result
                         })

                )
                .catch(console.log);

        })



}
    render() {
        console.log(this.state.myResult)
const {myResult}=this.state
 const electionRes=myResult.map(
     e=>{
         return(
        <div  key={e.id} style={{height:"100px", borderRadius:"25px", backgroundColor:"violet", marginBottom:"10px"}}>
        <div>
        <h5>{e.positionName}</h5>
          <div>{e.candidateName}
      <p><label for="male">{e.votes + ''} vote(s)</label></p></div>
</div></div>)
     }
 )
        

        return ( <div className="mybg">
            <div className="cardSpecial" style={{background:"url('https://images.unsplash.com/photo-1550086546-2f44adc87ecd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60')"}}>
{electionRes}
                

        
            </div></div> )

    }
}

export default ResultList