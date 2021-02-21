import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/Home';
import ResultList from './components/ResultList'
import Registration from './components/Registration'







function App() {

    return ( <
        div className = "App" > < Nav / > < /div>
    );


}
export default App;