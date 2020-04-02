import React from "react";
import "./LoginPage.less";
import "../../styleless.less";
import "antd/dist/antd.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import P from "../../Components-Ui/P/P";
import { Button } from "antd";

import { connect } from "react-redux";
import { Login } from "../../redux/actions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  // onSubmit = e => {
  //   e.preventDefault();
  // };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  Login = (e) => {
    e.preventDefault();
    if(this.state.name === "admin" && this.state.password === "admin"){
      console.log("lkhhhhhhhhhhhhhhi")
      this.props.login()
    }
  };
  render() {
    console.log(this.props);
    console.log("state", this.state);
    return (
      <div className="containerLogin">
        <div className="login">
          {/* <form onSubmit={this.onSubmit}> */}
            <P discription="please Login" strong />
            <Input
              className="margin1"
              size="large"
              placeholder="Username"
              prefix={<UserOutlined />}
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Input.Password
              className="margin1"
              size="large"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button
              className="margin1"
              type="primary"
              shape="round"
              size="large"
               onClick={this.Login }
            >
              Login
            </Button>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.login;
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(Login())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
