import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import  Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show:false,
            login_object:[],
            idNumber:"",
            loginCode:"",
            auth_obj:[]
             
        }
        this.handleForm=this.handleForm.bind(this)
        this.handleCodeVer=this.handleCodeVer.bind(this)
        this.idRef=React.createRef()
        this.handleCodeChange=this.handleCodeChange.bind(this)
        this.handleIdChange=this.handleIdChange.bind(this)
        this.hideModal=this.hideModal.bind(this)


    }



    handleForm(event){
        event.preventDefault()
        fetch("https://api.elokiravote.ml/users/login/request", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ idNumber:this.state.idNumber})
        })
        .then(data=>{
            if (data.status===404){
                alert("Your Account does not exist.Click OK to proceed to signup")
                this.props.history.push('/Register')
            }
            return data.json()})
        .then(res=>{console.log(res)
    
               this.setState({login_object:res,show:true})
       
            
            
        })
        .catch(err=>console.log(err))
    }
    

handleCodeVer(event){
        event.preventDefault()
        fetch("https://api.elokiravote.ml/users/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({loginId:this.state.login_object.loginId,loginCode:this.state.loginCode})
        })
        .then(data=>{
            if (data.status===401){
                 return "Invalid code entered. Press OK to generate a new code"
                
            }
            return data.json()})
        .then(res=>{console.log(res)
          if (res==="Invalid code entered. Press OK to generate a new code"){
            window.location.reload()
       alert ("Invalid code entered. Press OK to generate a new code")      
      
}
else{
               this.setState({auth_object:res})
               localStorage.setItem("token", res.token)
               this.props.history.push('/Election')
               }
       
            
            
        })
        .catch(err=>console.log(err))
    }
        
    
    
handleCodeChange = event =>{

    this.setState({ loginCode:event.target.value })
    
    }
    handleIdChange = event =>{

        this.setState({ idNumber:event.target.value })
        
        }
    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
        console.log(this.state.loginCode)
        console.log(this.state.idNumber)
        return ( < div className = "formContainer"
            style = {
                { height: '40vh', borderRadius: "25px", marginTop: '80px',justifyContent: "center", display: "block", textAlign: "center" }
            } > <
            Form onSubmit={this.handleForm}>
            <
            Form.Label > < h2 > Login < /h2></Form.Label >
           
            <
            Form.Row > <
            Form.Group as = { Col }
            controlId = "NationalId" >
            <
            Form.Control name = "idNumber" onChange={this.handleIdChange}
            placeholder = "Enter your National ID Number " / >
            <
            /
            Form.Group > < /Form.Row >

            <
            Button className = "cta"
            style = {
                { backgroundColor: 'green', borderRadius: "25px" }
            }
            variant = "primary"
            type = "submit" >
            Generate Verification Code <
            /Button> <p style={{marginTop:"30px"}}><p><small style={{marginTop:"40px"}}>A 6-digit verification code will be sent to your phone number</small ></p> < /p> < /
            Form >
            
            
            <
            Modal style = {
                { overflow: "scroll" ,width:"100%"}
            }
            show = { this.state.show}
            onHide = { this.hideModal }
            backdrop = "static"
            keyboard = { false } > <
            Modal.Header closeButton >
            <
            Modal.Title > < center > One-Time Verification Code < /center> < /Modal.Title > < /
            Modal.Header > <
            Modal.Body ><
            Form onSubmit={this.handleCodeVer}>
            <
            Form.Label > < h5 > Enter the 6 digit code that has been sent to you< /h5></Form.Label >
            <
            Form.Group controlId = "formGridIdCode" >
            <
            Form.Control name = "loginCode" onChange={this.handleCodeChange} 
            placeholder = "Enter the sent code" / >
            <
            /Form.Group>



            <
            Button className = "cta"
            style = {
                { backgroundColor: 'green', borderRadius: "25px" }
            }
            variant = "primary"
            type = "submit" >
            Submit <
            /Button>  < /
            Form > </
                            Modal.Body></Modal> 
            < /div > )
        }
    }

    export default Login