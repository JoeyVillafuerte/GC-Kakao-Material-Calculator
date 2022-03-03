import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/calculator' activeStyle>Calculator</NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/home'>Home</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;