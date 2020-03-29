import React from "react";
import "./Users.less";
import "antd/dist/antd.css";

import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150
  },
  {
    title: "UserName",
    dataIndex: "username",
    width: 150
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 150
  },
  {
    title: "Phone",
    dataIndex: "phone",
    width: 200
  },
  {
    title: "Website",
    dataIndex: "website"
  }
];
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    this.fetch();
  }
  fetch = () => {
    let user;
    let Data = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        user = data.map(e => {
          return Data.push({
            key: e.id,
            name: e.name,
            username: e.username,
            email: e.email,
            phone: e.phone,
            website: e.website
          });
        });
        console.log(user);
        this.setState({
          userData: Data
        });
      });
  };
  render() {
    return (
      <div className="containerTable">
        <div className="table">
          <Table
            columns={columns}
            dataSource={this.state.userData}
            pagination={{ pageSize: 3 }}
          />
          ,
        </div>
      </div>
    );
  }
}

export default Users;
