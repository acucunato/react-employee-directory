import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Employee Directory</h1>
          <p class="lead">
            Search below for employees, or click the heading to filter each
            category.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
