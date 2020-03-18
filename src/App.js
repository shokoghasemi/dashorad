import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components-Logic/LoginPage/LoginPage";
import LogOutPage from "./Components-Logic/LogOutPage/LogOutPage";
import Users from "./Components-Logic/Users/Users";

class App extends React.Component {
  render() {
    return (
      <div className="Menu">
        <Router >
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/about">Users</Link>
              </li>
              <li>
                <Link to="/panel">Panel</Link>
              </li>
              <li>
                <Link to="/logout">logout</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/logout">
              <LogOutPage />
            </Route>
            <Route path="/panel">
              <p>panellllllllllll</p>
            </Route>
            <Route path="/about">
              <Users/>
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
