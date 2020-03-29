import React from "react";
import "./App.css";
import "./RouterMenu.css";
import "antd/dist/antd.css";
import LoginPage from "./Components-Logic/LoginPage/LoginPage";
import LogOutPage from "./Components-Logic/LogOutPage/LogOutPage";
import Users from "./Components-Logic/Users/Users";
import Comment from "./Components-Logic/Comment/Comment"
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { List } from "antd";
const data = [
  <Link to="/">Login</Link>,
  <Link to="/about">Users</Link>,
  <Link to="/comment">Comment</Link>,
  <Link to="/logout">Logout</Link>
];
class RouterMenu extends React.Component {
  render() {
    return (
      <List
        size="small"
        dataSource={data}
        renderItem={item => <List.Item className="list">{item}</List.Item>}
      />
    );
  }
}
export function SwitchMenu() {
  return (
    <Switch>
      <Route path="/logout">
        <LogOutPage />
      </Route>
      <Route path="/comment">
        <Comment />
      </Route>
      <Route path="/about">
        <Users />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default RouterMenu;
