import { render } from '@testing-library/react'
import { React, useState, useEffect, Component } from 'react'
import { Card, Accordion, Button, Dropdown, Modal } from 'react-bootstrap'



class Election extends Component {

    constructor(props) {
        super(props)

        this.state = {
            election: [],
            position:[],
            candidate:[],
            show: false,
            hasVoted:false,
            isButtonDisabled:false,
            
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.castVote=this.castVote.bind('this')
        this.unDuplicateArraySingleValues=this.unDuplicateArraySingleValues.bind(this)
       

    }
    componentDidMount() {

        const token = localStorage.getItem('token')
        console.log("token: "+token)
        if (!token){
            alert("Please Sign Up First to View this Page")
            this.props.history.push('/Register')
        }

        if (this.state.hasVoted){
            alert("No elections are ongoing as at now.You may only view election results")
            this.props.history.push('/Results')
        }

        this.setState({}, () => {
            Promise.all([
                fetch("http://localhost:4000/election").then(value => value.json()),
                fetch("http://localhost:4000/position").then(value => value.json()),
                fetch("http://localhost:4000/candidate").then(value => value.json()),
                
                
                ])
                .then(value => {
                   console.log(value)
                   this.setState({
                       election:value[0],
                       position:value[1],
                       candidate:value[2]
                   })
                       
                  //json response
                
                
            })
           
    })
}




    showModal = () => {
        
        this.setState({ show: true });


    };
showModal=()=>{

this.setState({show:true})

}
    hideModal = () => {
        this.setState({ show: false });
    };
// handleVote=(id)=>{
//     fetch("http://localhost:4000/vote",{method: "POST",
//     mode:'cors',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({candidateId:"",voterId:"",voteDate:""})
// })
// }
    




    castVote= (id)=> {
        this.setState({
            isButtonDisabled: true,hasVoted:true
        })

        
        fetch("http://localhost:4000/candidate/" + id, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ votes: this.state.candidate[id - 1].votes + 1 })
            })
            .then(this.props.history.push('/Results'))

        .catch(console.log)



    }

    unDuplicateArraySingleValues(array) {
        // Check if we are dealing with an Array that is not empty
        if (!array || !Array.isArray(array) || array.length === 0) {
          return array;
        }
      
        // Return a Array of unique values thanks to the Set
        return [...new Set(array)];
      }


    render() {

        const { election,position,candidate} = this.state
        console.log(candidate)
const candModal=candidate.map(cand=>
    {
        return  (

        <
        Card key={cand.id} style = {
            { width: "18rem", margin: "auto", marginBottom: "50px", justifyContent: "center", display: "block", textAlign: "center" }
        } >
        <
        Card.Img variant = "top"
        src ={cand.logo}  /
        >
        <
        Card.Body >
        <
        Card.Title > {cand.candidateName} < /Card.Title><
        Button type="submit" disabled={this.state.isButtonDisabled}onClick={() => this.castVote(cand.id)} variant = "success" >
        Vote <
        /Button> < /
        Card.Body > <
        /Card>)
    })


const newpos=this.unDuplicateArraySingleValues(position)

const myPos= newpos.map((pos) => { return (<
    Dropdown.Item  key={pos.positionId}
    onClick = {this.showModal
    } >
    {pos.positionName} < /Dropdown.Item>)
 })


        const electionCard = election.map(e => {
                return ( < div  >
                    <
                    div className = "row" >
                    <
                    div className = "col-lg-8 mb-4" >
                    <
                    div  key = { e.electionId } className = "card"
                    style = {
                        { backgroundColor:"transparent",marginTop:"0",marginLeft:"23%" ,justifyContent: "center", textAlign: "center",borderRadius:"8px"}
                    } >
                    <
                    img className = "card-img-top"
                    style = {
                        { display: "block", marginLeft:"auto",marginRight:"auto",width:"50%"}
                    }
                    src = "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    alt = "" / >

                    <
                    div className = "card-body" >
                    <
                    h5 className = "card-title" > { e.electionName }
                     < /h5><h5>StartTime:{e.startDate}EndTime:{e.stopDate} 




                    <
                    /h5 >  <
                    p className = "card-text" > Click below to see the position being contested <
                    /p > < Dropdown > < Dropdown.Toggle variant = "success"
                    id = "dropdown-basic" >
                    Position Being Contested For < /Dropdown.Toggle>

                    <
                    Dropdown.Menu>
                    {myPos}  < /
                    Dropdown.Menu > < /
                    Dropdown >< /
                    div > < /
                    div > <
                    /div></div > < /div> )
                    

                })

            return ( < div style={{overflow:"hidden"}}> {electionCard} <
                Modal style = {
                    { overflowY: "scroll" ,width:"100%"}
                }
                show = { this.state.show }
                onHide = { this.hideModal }
                backdrop = "static"
                keyboard = { false } > <
                Modal.Header closeButton >
                <
                Modal.Title  > < center > Vying Candidates < /center> < /Modal.Title > < /
                Modal.Header > <
                Modal.Body >{candModal}</
                                Modal.Body></Modal>
         </div >
            )

        }
    }

    export default Election