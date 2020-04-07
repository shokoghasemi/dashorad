import React from "react";
import "./LoginPage.less";
import "../../styleless.less";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import P from "../../Components-Ui/P/P";
import { Button } from "antd";
import { Input } from "antd";
import { Alert } from "antd";
import { connect } from "react-redux";
import { Login } from "../../redux/actions";

interface LogState {
  name: string;
  password: string;
}
interface LogProps {
  isLogin: boolean;
}
class LoginPage extends React.Component<LogProps, LogState>{
  constructor(props: LogProps) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    this.setState({ name: value});
  };
  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    this.setState({ password: value });
  };
  Login = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log('click shoooood')
    e.preventDefault();
    if (this.state.name === "admin" && this.state.password === "admin") {
      //this.props.login();
      console.log('name&passord check shod')
    }
  };
  render() {
    const { name,password }: { name: string,password:string } = this.state;
    console.log(this.props);
    console.log("state", this.state);
    return (
      <div className="containerLogin">
        {this.props.isLogin !== true ? (
          <div className="login">
            <P discription="please Login" strong />
            <Input
              className="margin1"
              size="large"
              placeholder="Username"
              prefix={<UserOutlined />}
              name="name"
              value={name}
              onChange={(e) => this.onChangeName(e)}
            />
            <Input.Password
              className="margin1"
              size="large"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => this.onChangePassword(e)}
            />
            <Button
              className="margin1"
              type="primary"
              shape="round"
              size="large"
              onClick={this.Login}
            >
              Login
            </Button>
          </div>
        ) : (
            <Alert
              message="you are login"
              description="To exit the page, click on Logout in the menu."
              type="success"
              showIcon
              closable
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state:any) => state.login;
const mapDispatchToProps = (dispatch:any) => ({
  login: () => dispatch(Login())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
