import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from "../images/logo&text.png";
import "./navbarmenu.css";


const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};
  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }else {
      boxClassSubMenu.push('');
  }

  return(
		<header className="header_middle">
           <div className="container">
            <div className="row">
              <div className="header__middle__logo">
              <img  src={logo} alt="Logo" />
              </div>
              <div className="header__middle__menus">
                <nav className="main-nav" >
                  {/* Responsive Menu Button */}
                  {isResponsiveclose === true ? <>
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > < FiXCircle/> </span>
                  </> : <>
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                  </>}
                  <ul className={boxClass.join(" ")}>
                    <li className="menu-item">
                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName="is-active" to={`/temples`}> Temples </NavLink> </li>
                    <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName="is-active" to={`/pujari`}> Pujari </NavLink> </li>
                    <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName="is-active" to={`/contactus`}> ContactUs</NavLink> </li>
                    <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName="is-active" to={`/About`}> About </NavLink> </li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> SignUp <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink className="signup-items" onClick={toggleClass} activeClassName='is-active'  to={`/signuppujari`}> SignUp as Pujari </NavLink> </li>
                                <li><NavLink className="signup-items" onClick={toggleClass} activeClassName='is-active' to={`/signuptemple`}>SignUp as temple</NavLink> </li>
                                <li><NavLink className="signup-items" onClick={toggleClass} activeClassName='is-active' to={`/signupvisitor`}> SignUp as Visitor </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/login`}> Login </NavLink> </li>
                  </ul>            
                </nav>
              </div>
          </div>
      </div>
     
	  </header>

    )
}
export default Navbarmenu;