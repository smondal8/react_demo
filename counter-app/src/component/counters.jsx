import React, { Component } from "react";
import Counter from "./counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  onDelete() {
    console.log("On Delete from counter to counters");
  }
  render() {
    return (
      <div>
        {this.state.counters.map((cntr) => (
          <Counter key={cntr.id} value={cntr.value} onDelete={this.onDelete} />
        ))}
      </div>
    );
  }
}

export default Counters;
