import React from "react";
import "./LogOutPage.less";
import "antd/dist/antd.css";
import P from "../../Components-Ui/P/P";
import { Button} from 'antd';

class LogOutPage extends React.Component {
  render() {
    return (
      <div class="containerLogout">
        <div className="logout">
          <P discription="you are login" strong />
          <br />
         
          <Button type="primary" shape="round"  size="large">
          Logout
        </Button>
        </div>
      </div>
    );
  }
}

export default LogOutPage;
