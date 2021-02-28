import React, { Component } from 'react'
import './AuthElection.css'
import { Card, Accordion, Button, Dropdown, Modal,InputGroup } from 'react-bootstrap'



 class AuthElection extends Component {

constructor(props) {
    super(props)

    this.state = {
         elections:[],
         positions:[],
         electionDetails:[],
         CandidatesInPosition:[],
         selectedOption1:"",
         elec_pos1:"",
         selectedOption2:"",
         elec_pos2:""
    }
    this.getCandidatesInPosition=this.getCandidatesInPosition.bind(this)
    this.getElectionDetails=this.getElectionDetails.bind(this)
    this.displayPositions=this.displayPositions.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
    this.presChangeHandler=this.presChangeHandler.bind(this)
}






    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(token)
        if (!token){
            alert("Please Sign Up First to View this Page")
            this.props.history.push('/Register')
        }
        this.setState({}, () => {
           

    fetch("https://api.elokiravote.ml/elections", {
        method: "GET",

        headers: {
            'Content-type': 'application/json',
            'Authorization':`Bearer ${token}`
        }    
    })
    .then(data=>{
        if (data.status===200){
            return data.json()
        }
        else{
            return "ERROR!NOT AUTHORIZED!"
        }
    
    })
    .then(res=>{
        if (res==="ERROR!NOT AUTHORIZED!"){
            alert("Please Sign Up First to View")
            this.props.history('/Register')
        }
        else{
            this.setState({elections:res})
        }
    })
    .catch(error=>console.log(error))


        })

    }

    displayPositions(){

        const token = localStorage.getItem('token')
            console.log(token)

    fetch("https://api.elokiravote.ml/elections/28573a7e-8b74-4604-a605-3808d9877ea4", {
        method: "GET",

        headers: {
            'Content-type': 'application/json',
            'Authorization':`Bearer ${token}`
        }    
    })
    .then(data=>{
        if (data.status===200){
            return data.json()
        }
        else{
            return "ERROR!NOT AUTHEORIZED!"
        }
    
    })
    .then(res=>{
        if (res==="ERROR!NOT AUTHEORIZED!"){
            alert("Please Sign Up First to View")
            this.props.history('/Register')
        }
        else{
            this.setState({positions:res})
        }
    })
    .catch(error=>console.log(error))


    }

    getElectionDetails(){

        const token = localStorage.getItem('token')
            console.log(token)

    fetch("https://api.elokiravote.ml/elections/28573a7e-8b74-4604-a605-3808d9877ea4", {
        method: "GET",

        headers: {
            'Content-type': 'application/json',
            'Authorization':`Bearer ${token}`
        }    
    })
    .then(data=>{
        if (data.status===200){
            return data.json()
        }
        else{
            return "ERROR!NOT AUTHORIZED!"
        }
    
    })
    .then(res=>{
        if (res==="ERROR!NOT AUTHORIZED!"){
            alert("Please Sign Up First to View")
            this.props.history('/Register')
        }
        else{
            this.setState({electionDetails:res})
        }
    })
    .catch(error=>console.log(error))


    }
    
    getCandidatesInPosition(){

        const token = localStorage.getItem('token')
            console.log(token)

    fetch("https://api.elokiravote.ml/28573a7e-8b74-4604-a605-3808d9877ea4/positions/ff0fdcac-6c8c-4ffb-a5ba-924532ef4dfa/candidates", {
        method: "GET",

        headers: {
            'Content-type': 'application/json',
            'Authorization':`Bearer ${token}`
        }    
    })
    .then(data=>{
        if (data.status===200){
            return data.json()
        }
        else{
            return "ERROR!NOT AUTHORIZED!"
        }
    
    })
    .then(res=>{
        if (res==="ERROR!NOT AUTHORIZED!"){
            alert("Please Sign Up First to View")
            this.props.history('/Register')
        }
        else{
            this.setState({CandidatesInPosition:res})
        }
    })
    .catch(error=>console.log(error))


    }

    presChangeHandler(event){
        this.setState({
            selectedOption1:event.target.value
        })
        
            console.log()
        
        
    }
    changeHandler(event){
        this.setState({selectedOption2:event.target.value})
        
    }

    handleSubmit(event){
event.preventDefault()
// console.log(this.state.selectedOption1)
// console.log(this.state.selectedOption2)
const myVote=[{
    position:"president",
    candidate:this.state.selectedOption1
},
{
    position:"MP",
    candidate:this.state.selectedOption2
}]
console.log(myVote)
    }

    render() {
        const {selectedOption1,vote_obj1}=this.state
        return (
            <div className="mybg">
            <div className="cardSpecial">

                <form onSubmit={this.handleSubmit}>

                   

<div class="dropdown">
  <button className="dropbtn" disabled={true}>Positions being vied for:</button>
  <div className="dropdown-content">
  <h5>Presidential</h5>
    <a href="#">Ray Holton<input type="radio"  checked={selectedOption1==="Ray Holton"} onChange={this.presChangeHandler}  value="Ray Holton" />
<label for="male">Cast Vote</label></a>
    <a href="#">Sally Montera<input type="radio"  checked={selectedOption1==="Sally Montera"} onChange={this.presChangeHandler}  value="Sally Montera"/>
<label for="male">Cast Vote</label></a>
    <a href="#">Khaleesi Kandie<input type="radio"   checked={selectedOption1==="Khaleesi Kandie"}onChange={this.presChangeHandler}  value="Khaleesi Kandie"/>
<label for="male">Cast Vote</label></a>
  <h5>Member Of Parliament</h5>
    <a href="#">Peter Parter<input type="radio" checked={this.state.selectedOption2 === "Peter Parter"}  onChange={this.changeHandler}  value="Peter Parter"/>
<label for="male">Cast Vote</label></a>
    <a href="#">Drew Montez<input type="radio" checked={this.state.selectedOption2 === "Drew Montez"}  onChange={this.changeHandler}  value="Drew Montez"/>
<label for="male">Cast Vote</label></a>
    <a href="#">Hannah Rodgers<input type="radio" checked={this.state.selectedOption2 === "Hannah rodgers"}  onChange={this.changeHandler}  value="Hannah rodgers"/>
<label for="male">Cast Vote</label></a></div>
</div>
<Button  type="submit" style={{marginTop:"320px",marginLeft:"15%",width:"300px",justifyContent: "center", display: "block", textAlign: "center" }}>VOTE</Button>
</form>
            </div></div>
        )
    }
}

export default AuthElection
