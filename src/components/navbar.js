import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll"

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: white;
  z-index: 100;

`
const NavGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
`

const Navbar = () => (
  <NavWrapper>
    <NavGroup>
      <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
    >Home</Link>
    <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
    >About</Link>
    <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
    >Services</Link>
    <Link
        activeClass="active"
        to="blog"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
    >Blog</Link>
    <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
    >Contact</Link>
    </NavGroup>
  </NavWrapper>
)

export default Navbar