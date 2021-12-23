import React, { Component } from "react";
class Counter extends React.Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag4"],
  };

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrement = (product) => {
    console.log("Clicked", product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement(1);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.value === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
