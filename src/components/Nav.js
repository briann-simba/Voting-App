import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import { Component } from 'react'
import Registration from './Registration'


import ResultList from './ResultList'
import Vote from './Vote'
import Election from './Election'
import Login from './Login'
import history from './history'
import AuthElection from './AuthElection'
import UserProfile from './UserProfile'


class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             token:localStorage.getItem("token"),
             myState:false

        }
    }
    
    render() {
        const {token,myState}=this.state
       
        return ( < Router> < div id = "cont" >
            <
            ul className = "header" >
            
<img style={{height:"50px",width:"50px", marginLeft:"0px",justifyContent:"left", borderRadius:"25px"}} src="../default.png"/>
            <
            li > <
            NavLink to = '/Results' > < i class = "ni ni-single-02" > Results < /i>    < /NavLink > < /li > <
            li > <
            NavLink  to = '/UserLogin' > < i class = "now-ui-icons objects_support-17" >  UserLogin < /i> < /NavLink > < /li >  <
            li > <
            NavLink to = '/UserProfile' > <
            i className = "ni ni-key-25" > UserProfile < /i > < /NavLink > < /li > <
            li > <
            NavLink to = '/Register' > <
            i className = "ni ni-circle-08" > Register < /i> < /NavLink > < /li ><
            li > <
            NavLink exact to = '/ElectionDashboard' > <
            i className = "ni ni-planet" > Elections < /i> < /NavLink > < /li > < /
            ul > <
            div className = "content" >

            <
            Route exact path = '/ElectionDashboard'
            component = {Election}
            /> <
            Route path = '/Register'
            component = { Registration }
            /> <
            Route path = '/UserProfile'
            component = { UserProfile }
            /> <
            Route path = '/Results'
            component = { ResultList }
            /> <
            Route path = '/UserLogin'
            component = { Login }
            /> < /
            div > < /div> < /Router >)

           
        
    }
}

export default Nav