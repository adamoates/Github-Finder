import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class UserSearch extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired,
    showSearchForm: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClearButton, showSearchForm } = this.props;

    return (
      <div>
        {showSearchForm && (
          <form onSubmit={this.onSubmit} className="form">
            <input
              type="text"
              name="text"
              placeholder="Search Users..."
              value={this.state.text}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-dark btn-block"
            />
          </form>
        )}
        {showClearButton && (
          <button
            className="btn btn-dark btn-block my-3"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default UserSearch;
