import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="form-inline search-bar">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          //   value={this.state.lastName}
          name="search"
        />
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
