import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p>
            Search below for employees, or click the heading to filter each
            category.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
