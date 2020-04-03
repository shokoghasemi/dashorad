import React from "react";
import "./LogOutPage.less";
import "../../styleless.less";
import "antd/dist/antd.css";
import P from "../../Components-Ui/P/P";
import { Button } from "antd";
import { Alert } from "antd";
import { connect } from "react-redux";
import { Logout } from "../../redux/actions";

function LogOutPage(props) {
  return (
    <div className="containerLogout">
      {props.isLogin === true ? (
        <div className="logout">
          <P
            className="margin1"
            discription="Are you sure want to exit?"
            strong
          />
          <Button
            className="margin1"
            type="danger"
            shape="round"
            size="large"
            onClick={() => props.logout()}
          >
            Yes
          </Button>
          <Button className="margin1" type="primary" shape="round" size="large">
            No
          </Button>
        </div>
      ) : (
        <Alert
          message="you are logout"
          description="To login the page, click on Login in the menu."
          type="warning"
          showIcon
          closable
        />
      )}
    </div>
  );
}

const mapStateToProps = state => state.login;
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(LogOutPage);
