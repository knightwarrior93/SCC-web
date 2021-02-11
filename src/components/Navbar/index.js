import React from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { Nav, Component, NavItems, NavLink, NavIcon } from './NavbarElements';
// import { Button } from '../../globalStyle';
function Navbar() {
  return (
    <>
      <Nav>
        <Component className="icon-bar">
          <NavItems>
            <NavLink path="exect" to="/">
              Home
            </NavLink>
            <NavLink path="exect" to="/Services">
              Services
            </NavLink>
            <NavLink path="exect" to="/Blog">
              Blogs
            </NavLink>
            <NavLink path="exect" to="/Blog">
              About
            </NavLink>
          </NavItems>
        </Component>
        <NavIcon>
          <VscThreeBars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
