import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
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

  updateList = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredList = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <form className="form-inline search-bar">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Employees"
            value={this.state.search}
            name="search"
            onChange={this.updateList.bind(this)}
          />
        </form>
        <div className="table-content">
          <div className="row">
            <div className="col-md-1 headings">image</div>
            <div className="col-md-1 headings">first name</div>
            <div className="col-md-1 headings">
              last name <i className="fas fa-sort"></i>
            </div>
            <div className="col-md-2 headings">phone</div>
            <div className="col-md-3 headings">email</div>
            <div className="col-md-2 headings">location</div>
            <div className="col-md-2 headings">dob</div>
          </div>
          <div>
            <Card filteredList={filteredList} />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
