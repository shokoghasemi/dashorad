import React from "react";
import "./LogOutPage.less";
import "../../styleless.less";
import "antd/dist/antd.css";
import P from "../../Components-Ui/P/P";
import { Button } from "antd";

class LogOutPage extends React.Component {
  render() {
    return (
      <div className="containerLogout">
        <div className="logout">
          <P className="margin1" discription="Are you sure want to exit?" strong />
          <Button className="margin1" type="danger" shape="round" size="large">
            Yes
          </Button>
          <Button className="margin1"  type="primary" shape="round" size="large">
            No
          </Button>
        </div>
      </div>
    );
  }
}

export default LogOutPage;
