import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav'
import { React, Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import ResultList from './components/ResultList'
import Registration from './components/Registration'
import Login from './components/Login'
import Election from './components/Election'
import UserProfile from './components/UserProfile'



class App extends Component {
    constructor(props) {
        super(props)

       
    }

    render() {
        
       
        
            return ( <
                div className = "App" >
                <Nav/>
                  < /div>
            );
        



    }
}
export default App;