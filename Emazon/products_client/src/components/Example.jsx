import React, { Component } from "react";

class Example extends Component {
  handleSubmit() {
    const pkg = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
    };
    fetch(MyUrlHere, pkg);
  }
  render() {
    return <div></div>;
  }
}

export default Example;
