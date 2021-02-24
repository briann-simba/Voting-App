import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import { Component } from 'react'
import Registration from './Registration'
import Verification from './Verification'
import Home from './Home'
import ResultList from './ResultList'
import Vote from './Vote'
import Election from './Election'
import Login from './Login'
import history from './history'


class Nav extends Component {
    render() {
        return ( < Router> < div id = "cont" >
            <
            ul className = "header" >

            <
            li > <
            NavLink to = '/Results' > < i class = "ni ni-single-02" > Results < /i>    < /NavLink > < /li > <
            li > <
            NavLink to = '/UserLogin' > < i class = "now-ui-icons objects_support-17" >  UserLogin < /i> < /NavLink > < /li >  <
            li > <
            NavLink to = '/Verification' > <
            i className = "ni ni-key-25" > Verification < /i > < /NavLink > < /li > <
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
            component = { Election }
            /> <
            Route path = '/Register'
            component = { Registration }
            /> <
            Route path = '/Verification'
            component = { Verification }
            /> <
            Route path = '/Results'
            component = { ResultList }
            /> <
            Route path = '/UserLogin'
            component = { Login }
            /> < /
            div > < /div> < /Router >
        )
    }
}

export default Nav