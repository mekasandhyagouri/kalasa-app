import React from 'react';
import { Nav,
    NavLink, 
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
    } from './NavBarElements';
import logo from '../images/Logo.jpeg';
import underLineDesign from "../images/underlineDesign.png";

const Navbar = () => {
  return ( 
    <>
      <Nav>
        <NavLink to ="/" exact activeStyle >
        <img className="logo" src={logo} alt="Logo" />
        <p className="kalasa">Kalasa</p>
        <img
          className="underLineDesign"
          src={underLineDesign}
          alt="underLine"
        />
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/temples" activestyle>
            Temples
          </NavLink>
          <NavLink to="/pujari" activestyle>
            Pujari
          </NavLink>
          <NavLink to="/contactus" activestyle>
            Contact Us
          </NavLink>
          <NavLink to="/about" activestyle>
            About
          </NavLink>
          <NavLink to="/sign-up" activestyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Login">Login</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
   );
}
 
export default Navbar;