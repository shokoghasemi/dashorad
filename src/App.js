import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMenu, { SwitchMenu } from "./RouterMenu";
const { Sider, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <Router>
          <Layout className="containerCard">
            <Content>
              <SwitchMenu />
            </Content>
            <Sider className="sider">
              <RouterMenu />
            </Sider>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
