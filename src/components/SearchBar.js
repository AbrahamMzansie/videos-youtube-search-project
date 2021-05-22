import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: null };

  onValueChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };
  searchVideoHandler = (e) => {
    e.preventDefault();
    this.props.onSearchTerm(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.searchVideoHandler} className="ui form">
          <div className="field">
            <label>Video</label>
            <input
              placeholder="search video"
              type="text"
              size="30"
              onChange={this.onValueChangeHandler}
              value={this.state.searchTerm}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
