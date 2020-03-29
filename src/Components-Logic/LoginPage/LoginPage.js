import React from "react";
import "./LoginPage.less";
import "../../styleless.less";
import "antd/dist/antd.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import P from "../../Components-Ui/P/P";
import { Button } from "antd";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="containerLogin">
        <div className="login">
          <P  discription="please Login" strong />
          <Input
            className="margin1"
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
          />
          <Input.Password
            className="margin1"
            size="large"
            placeholder="Password"
          />
          <Button className="margin1" type="primary" shape="round" size="large">
            Login
          </Button>
          
        </div>
      </div>
    );
  }
}

export default LoginPage;
