import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    sort: "",
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

  handleSort = () => {
    if (this.state.sort === "desc" || this.state.sort !== "asc") {
      this.setState({ sort: "asc" });
    } else if (this.state.sort === "asc" || this.state.sort !== "desc") {
      this.setState({ sort: "desc" });
    }
  };

  render() {
    let filteredList = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    const ascend = (a, b) => {
      const empA = a.name.last.toUpperCase();
      const empB = b.name.last.toUpperCase();
      let compare = 0;
      if (empA > empB) {
        compare = 1;
      } else if (empA < empB) {
        compare = -1;
      }
      return compare * 1;
    };

    const descend = (a, b) => {
      const empA = a.name.last.toUpperCase();
      const empB = b.name.last.toUpperCase();
      let compare = 0;
      if (empA > empB) {
        compare = 1;
      } else if (empA < empB) {
        compare = -1;
      }
      return compare * -1;
    };

    if (this.state.sort === "asc") {
      filteredList.sort(ascend);
    } else if (this.state.sort === "desc") {
      filteredList.sort(descend);
    }

    return (
      <>
        <form className="form-inline search-bar">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by First Name"
            value={this.state.search}
            name="search"
            onChange={this.updateList.bind(this)}
          />
        </form>
        <div className="table-content">
          <div className="row">
            <div className="col-md-1 headings">image</div>
            <div className="col-md-1 headings">first name</div>
            <div className="col-md-2 headings">
              last name
              <button className="btn" onClick={this.handleSort}>
                <i className="fas fa-sort"></i>
              </button>
            </div>
            <div className="col-md-2 headings">phone</div>
            <div className="col-md-3 headings">email</div>
            <div className="col-md-1 headings">location</div>
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
