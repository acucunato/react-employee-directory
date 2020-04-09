import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class TableHeader extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.employeeInfo();
  }

  employeeInfo = () => {
    API.getUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="table-content">
        <div className="row">
          <div className="col-md-1 headings">image</div>
          <div className="col-md-1 headings">
            <strong>first name</strong>
          </div>
          <div className="col-md-1 headings">
            <strong>last name</strong>
          </div>
          <div className="col-md-2 headings">
            <strong>phone</strong>
          </div>
          <div className="col-md-3 headings">
            <strong>email</strong>
          </div>
          <div className="col-md-2 headings">
            <strong>location</strong>
          </div>
          <div className="col-md-2 headings">
            <strong>dob</strong>
          </div>
        </div>
        <div>
          <Card employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default TableHeader;
