import React from "react";
import "./LoginPage.less";
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
          <P discription="please Login" strong />
          <br />
          <div className="example-input">
            <Input
              size="large"
              placeholder="Username"
              prefix={<UserOutlined />}
            />
            <br />
            <Input.Password size="large" placeholder="Password" />
          </div>
          <Button type="primary" shape="round" size="large">
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
