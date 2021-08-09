import styled from 'styled-components';
import {NavLink as Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
   
  background: #FF781F ;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw- 1000px) / 2);
  z-index: 10;

`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

  &.active {
    color: #141414;
  }

  &:hover {
    transition:all 0.2s ease-in-out;
    color: #00d8ff;
  }
`

export const Bars= styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 1;
    right: 0;
    transform:translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    align-items: center;

  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px){
    display: none;

  }

  
`

export const NavBtn = styled.nav`
  display:flex;
  align-items:center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;

  }
`
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #007dfa;
  padding: 10px 22px;
  color:  #FFF;
  border: 2px;
  outline: 600px;
  cursor: pointer;
  transition:all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition:all 0.2s ease-in-out;
    background: #fff;
    color: #141414;
  }
  &.active {
    color: #141414;
    background:#fff;
`
