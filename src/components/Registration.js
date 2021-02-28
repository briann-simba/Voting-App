import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import history from './history'

import {Redirect} from 'react-router'
import {withRouter} from 'react-router-dom'
import {  Modal } from 'react-bootstrap'

class Registration extends Component {
    constructor(props) {
        super(props);
        // this.onChangeHandler = this.onChangeHandler.bind(this);

        


        this.state = {
            idNumber: "",
            firstName: "",
            registration_object:[],
            verification_object:[],
            auth_object:[],
            showModal1:false,
            showModal2:false,
            phoneNumber:"",
            loginCode:""
            
            
            
        };
        this.handleGenCode=this.handleGenCode.bind(this)
        this.SubmitReg = this.SubmitReg.bind(this)
        this.submitVer=this.submitVer.bind(this)
        this.idRef=React.createRef()
        this.nameRef=React.createRef()
        this.phoneRef=React.createRef()
    }
    
        
    


      SubmitReg(event) {
          event.preventDefault()
          fetch("https://api.elokiravote.ml/users/verify", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ idNumber:this.idRef.current.value,firstName:this.nameRef.current.value})
        })
        .then(data=>{
            if (data.status===200){
                     
                       return data.json()
            }
            else if (data.status===403){
                alert("Please check your details")
                return "Please check your details"
            }
            else{
                return "Account already exists"
            }})
        .then(res=>{console.log(res)
            
            if (res==="Please check your details"){
                window.location.reload()
                
            }
            else if (res==="Account already exists"){
                this.props.history.push('/UserLogin')

            }
            else{this.setState({registration_object:res,showModal1:true})
                localStorage.setItem('regObject', JSON.stringify(res))
                let regObject = localStorage.getItem('regObject')
                console.log(JSON.parse(regObject))
        }

            
        })
        
    
        // if (myStatus===200){
        //         this.setState({ showModal1: true ,
                    
        //         })
                
        // }
        // else if (myStatus===403){
        //     window.location.reload(true)
        
        // }
        // else{
            
        //     this.props.history.push('/UserLogin')
        // }
    // })

}

    

      
      hideModal1 = () => {
        this.setState({ showModal1: false });
    };
    hideModal2 = () => {
        this.setState({ showModal2: false });
    };

    handleChange = event =>{

        this.setState({ [event.target.name]:event.target.value })
        
        }

    submitVer(event){
        event.preventDefault()
        const regObject = localStorage.getItem('regObject')
        fetch("https://api.elokiravote.ml/users", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ firstName:this.state.registration_object.firstName,lastName:this.state.registration_object.lastName,idNumber:this.state.registration_object.idNumber,phoneNumber:this.state.phoneNumber})

        })
        .then(data=>{
            if (data.status===200){
                     
                       return data.json()
            }
            else if (data.status===403){
                
                return "Please provide a valid phone number"
            }
            else{
                
                return "You already have an account.Click OK to proceed to login"
            }})
        .then(res=>{console.log(res)
            if (res==="Please provide a valid phone number"){
                alert("Please provide a valid phone number") 
                window.location.reload() 
            }
            else if (res==="You already have an account.Click OK to proceed to login"){
                alert("You already have an account.Click OK to proceed to login")
                this.props.history.push('/UserLogin') 

            }
            else{this.setState({verification_object:res,showModal2:true})}
            
        })
        .catch(err=>console.log(err))
    }
    
    handleGenCode(event){
        event.preventDefault()
        fetch("https://api.elokiravote.ml/users", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({loginId:this.state.verification_object.loginId,loginCode:this.state.loginCode})
        })
        .then(data=>{
            if (data.status===401){
                 return "Authentication Failed. Press OK to generate a new code"
                
            }
            return data.json()})
        .then(res=>{console.log(res)
          if (res==="Authentication Failed. Press OK to generate a new code"){
            window.location.reload()
       alert ("Authentication Failed. Press OK to generate a new code")      
      
}
else{
               this.setState({auth_object:res})
               this.props.history.push('/Election')
               }
       
            
            
        })
        .catch(err=>console.log(err))
    }
       
    render() {
        
        console.log(this.state.registration_object.firstName)
         console.log(this.state.phoneNumber)
        
        return ( < div className = "formContainer" style = {
            { height: '50vh', borderRadius: "25px", marginTop: '80px',justifyContent: "center", display: "block", textAlign: "center" }
        } > <
            Form method="POST" onSubmit={this.SubmitReg}>
            <
            Form.Label > < h1 > Register < /h1></Form.Label >
            <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridFName" >
            <
            Form.Label > First Name < /Form.Label> <
            Form.Control type = "text"
            name = "firstName"  ref={this.nameRef}
            placeholder = "Enter your First Name" / > < /Form.Group></Form.Row >
            <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridIdNumber" >
            <
            Form.Label > National ID Number < /Form.Label> <
            Form.Control name = "idNumber" type="text"  ref={this.idRef}
            placeholder = "Enter your National ID Number" / >
            <
            /Form.Group>

            <
            /Form.Row> 

            <
            Button className = "cta"
            style = {
                { backgroundColor: 'green', borderRadius: "25px" }
            }
            variant = "primary"
            type = "submit" >
            Validate < /Button> < /
            Form ><
            Modal style = {
                { overflow: "scroll" ,width:"100%"}
            }
            show = { this.state.showModal1 }
            onHide = { this.hideModal1 }
            backdrop = "static"
            keyboard = { false } > <
            Modal.Header closeButton >
            <
            Modal.Title > < center >  Please verify Login Request< /center> < /Modal.Title > < /
            Modal.Header > <
            Modal.Body ><
            Form onSubmit={this.submitVer}>
            <
            Form.Label > < h1 > Verification < /h1></Form.Label >
            <
            Form.Group controlId = "formGridIdNumber" >
            <
            Form.Label > Phone Number < /Form.Label> <
            Form.Control name = "phoneNumber" onChange={this.handleChange}
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
            Form > </
                            Modal.Body></Modal>
                            
                            
                            <
            Modal style = {
                { overflow: "scroll" ,width:"100%"}
            }
            show = { this.state.showModal2 }
            onHide = { this.hideModal2 }
            backdrop = "static"
            keyboard = { false } > <
            Modal.Header closeButton >
            <
            Modal.Title > < center > One-Time Verification Code < /center> < /Modal.Title > < /
            Modal.Header > <
            Modal.Body ><
            Form onSubmit={this.handleGenCode}>
            <
            Form.Label > < h1 > Enter the 6 digit code that has been sent to you< /h1></Form.Label >
            <
            Form.Group controlId = "formGridIdCode" >
            <
            Form.Control name = "loginCode" onChange={this.handleChange}
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
                            
                            
                            
                            < /div>
        )
    }
}

export default withRouter(Registration)