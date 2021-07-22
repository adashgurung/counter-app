import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Class-based Component</h2>

        <button className="button" onClick={this.increment}>
          ➕
        </button>

        <button className="button" onClick={this.decrement}>
          ➖
        </button>
        <h2>The count is: {this.state.count}</h2>
      </div>
    );
  }
}
