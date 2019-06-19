import React, { Component } from "react";
import Room from "./room";
class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      v: 0,
      disabledEle: "disabled"
    };
    this.dosomething = this.dosomething.bind(this);
    var noback = {
      background: "gray",
      opacity: 0.5,
      background: "gray"
    };
    for (let i = 0; i < 4; i++) {
      this.state.v = i;
      if (i === 0) {
        this.state.rooms.push(
          <Room dis="none" d="0" val={`${this.state.v}`} />
        );
        continue;
      }
      var disabled1 = {
        pointerEvents: "none"
      };
      this.state.rooms.push(
        <Room
          d="1"
          action={this.dosomething}
          val={`${this.state.v}`}
          chk=""
          styless={noback}
          due={disabled1}
        />
      );
    }
  }
  dosomething(val, checkedUnchecked) {
    var noback = {};
    console.log(checkedUnchecked);
    var checkedIt = "checked";
    var disabled1 = {
      pointerEvents: "auto"
    };

    console.log("hi" + val);
    var updated = [];
    for (let i = 0; i < 4; i++) {
      if (i > val || checkedUnchecked == false) {
        checkedIt = "";
        noback = {
          background: "gray",
          opacity: 0.5,
          background: "gray"
        };
        disabled1 = {
          pointerEvents: "none"
        };
      }
      console.log(checkedIt);
      console.log(disabled1);
      this.state.v = i;
      if (i === 0) {
        updated.push(<Room dis="none" d="0" val={`${this.state.v}`} />);
        continue;
      }
      updated.push(
        <Room
          d="1"
          action={this.dosomething}
          val={`${this.state.v}`}
          chk={`${checkedIt}`}
          styless={noback}
          due={disabled1}
        />
      );
    }
    this.setState({ rooms: updated });
  }
  state = {};
  render() {
    return <div>{this.state.rooms}</div>;
  }
}

export default Hotel;
