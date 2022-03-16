import React, { Component } from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElemntes";
import { Link, animateScroll as scroll } from "react-scroll";
import { render } from "@testing-library/react";

export default class  Navbar  extends Component  {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render()  {
    return (
      <>
        <Nav>
          <NavLink to="/"></NavLink>
          <NavIcon onClick={this.scrollToTop}> 
            <p>Menu</p>
            <Bars />
            
          </NavIcon>
        </Nav>
      </>
    );
  }
};


