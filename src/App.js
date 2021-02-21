import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/Home';
import ResultList from './components/ResultList'
import Registration from './components/Registration'
import LogOut from './components/LogOut'
import { useAuth0 } from '@auth0/auth0-react'
import PostFireBase from './components/PostFireBase'
import LandingPage from './components/LandingPage'
import InterestingLoader from './components/InterestingLoader'
import BlogCardTiles from './components/BlogCardTiles'


function App() {
    const { isLoading, isAuthenticated } = useAuth0()
    if (isLoading) {
        return <h1 className = "kh1"
        style = {
            { marginLeft: '35%' }
        } > Loading.. < /h1>
    }

    if (isAuthenticated) {
        return ( <
            div className = "App" >
            <
            Registration / >
            <
            LogOut / >

            <
            /div>)

        }
        else {
            return ( <
                div className = "App" > < Nav / > < /div>
            );

        }
    } {
        /* < Nav / >
            < PostFireBase / > */
    }
    export default App;