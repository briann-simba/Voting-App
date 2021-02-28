import React, { Component } from 'react'
import '../UserProfile.css' 

class UserProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            myProfile:[],
            allUsers:[],
            userbyId:[]
        }
    }
    

    componentDidMount() {

        const token = localStorage.getItem('token')
        console.log("token: "+token)
        if (!token){
            alert("Please Sign Up First to View this Page")
            this.props.history.push('/Register')
        }
        
            Promise.all([
                fetch("https://api.elokiravote.ml/users/me", {
                    method: "GET",
            
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization':`Bearer ${token}`,
                        
                    }    
                }).then(data=>
                    data.json()),
                fetch("https://api.elokiravote.ml/users", {
                    method: "GET",
            
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }    
                }).then(data=>
                        data.json()
                ),
                fetch("https://api.elokiravote.ml/users/43782167-7342-4548-B2ec-97db8d9ee0d0", {
                    method: "GET",
            
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }    
                }).then(data=>
                    data.json())
                .then(res => {
                  
                   this.setState({
                       myProfile:res[0],
                       allUsers:res[1],
                       userbyId:res[2]
                   })
                     
                  //json response
                
                
            })
           
         
}




    render() {
        const {myProfile,allUsers,userById}=this.state
        console.log(myProfile)
        console.log(allUsers)
        console.log(userById)
        return (
            <div>
                <div className="teams">
  <div className="carde">
  <div className="carde-top">
    <img src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png" alt=""/>
    <span className="name">Name:Brian Simba</span>
    <span className="name"><small>UserId:43782167-7342-4548-b2ec-97db8d9ee0d0</small></span>
    <span className="name"><small>PhoneNumber:+254797911505</small></span>
    <span className="name"><small>Id Number:36809492</small></span>
    <span className="name"><small>Date Created:16th February 2021</small></span>
    <span className="name"><small>Date Updated:16th February 2021</small></span>
    <span className="name"><small>Last Updated By:43782167-7342-4548-b2ec-97db8d9ee0d0</small></span>
    <span className="name"><small>Admin:False</small></span>

  </div>
  
</div>
  
</div>
</div>

            
        )
    }
}

export default UserProfile
