import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import LoginPage from "./Components-Logic/LoginPage/LoginPage";
import LogOutPage from "./Components-Logic/LogOutPage/LogOutPage";
import Users from "./Components-Logic/Users/Users";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { List} from 'antd';
const data = [
     <Link to="/">Login</Link>,
     <Link to="/about">Users</Link>,
     <Link to="/panel">Panel</Link>,
     <Link to="/logout">logout</Link>,
  ];
class RouterMenu extends React.Component {
  render() {
    return (

        <List
        size="small"
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
     />
    );
  }
}
export function SwitchMenu(){
    return(
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
    )
}

export default RouterMenu;
