import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import ResultList from "./components/ResultList";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Election from "./components/Election";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    if (isAuthenticated) {
      return <Login />;
    } else {
      return (
        <div className="App">
          <Nav />
        </div>
      );
    }
  }
}
export default App;
