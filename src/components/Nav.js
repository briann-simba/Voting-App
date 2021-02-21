import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Component } from 'react'
import Registration from './Registration'
import Login from './Login'
import Home from './Home'
import ResultList from './ResultList'
import Vote from './Vote'
import LogOut from './LogOut'


class Nav extends Component {
    render() {
        return ( < Router > < div id = "cont" >
            <
            ul className = "header" >

            <
            li > <
            NavLink to = '/Results' > < i class = "ni ni-single-02" > Results < /i>    < /NavLink > < /li > <
            li > <
            NavLink to = '/Vote' > < i class = "now-ui-icons objects_support-17" > CastYourVote < /i> < /NavLink > < /li >  <
            li > <
            NavLink to = '/Login' > <
            i className = "ni ni-key-25" > LogIn / LogOut < /i > < /NavLink > < /li > <
            li > <
            NavLink to = '/Register' > <
            i className = "ni ni-circle-08" > Register < /i> < /NavLink > < /li ><
            li > <
            NavLink exact to = '/Home' > <
            i className = "ni ni-planet" > HomePage < /i> < /NavLink > < /li > < /
            ul > <
            div className = "content" >

            <
            Route exact path = '/Home'
            component = { Home }
            /> <
            Route path = '/Register'
            component = { Registration }
            /> <
            Route path = '/Login'
            component = { Login }
            /> <
            Route path = '/Results'
            component = { ResultList }
            /> <
            Route path = '/Vote'
            component = { Vote }
            /> < /
            div > < /div> < /Router >
        )
    }
}

export default Nav