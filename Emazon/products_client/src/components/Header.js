import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="navbarTop">
        <div className="ScreenTop"> </div>
        <div className="Banner">
          {" "}
          E-Mazon <br />
          <span ClassName="logo">Logo</span>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input type="search" name="search" placeholder="Search.."></input>
            <input type="submit" value="Search" />
            <i type="submit" className="fa fa-search"></i>
          </form>
        </div>
        <div className="navBar">
          
          <ul>
            {" "}
            <li> Holiday Deals </li> |<li> Gift Cards </li> |
            <li> Get Ultra </li> |<li> Find a Gift </li> |
            <li> Special Sales </li> |<li> We are Hiring </li>
          </ul>{" "}
        </div>
      </div>
    );
  }
}
