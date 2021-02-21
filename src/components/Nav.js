import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Component } from 'react'
import Registration from './Registration'
import Verification from './Verification'
import Home from './Home'
import ResultList from './ResultList'
import Vote from './Vote'

import history from './history'


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
            NavLink to = '/Verification' > <
            i className = "ni ni-key-25" > Verification / LogOut < /i > < /NavLink > < /li > <
            li > <
            NavLink to = '/Register' > <
            i className = "ni ni-circle-08" > Register < /i> < /NavLink > < /li ><
            li > <
            NavLink exact to = '/' > <
            i className = "ni ni-planet" > HomePage < /i> < /NavLink > < /li > < /
            ul > <
            div className = "content" >

            <
            Route exact path = '/'
            component = { Home }
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
            Route path = '/Vote'
            component = { Vote }
            /> < /
            div > < /div> < /Router >
        )
    }
}

export default Nav