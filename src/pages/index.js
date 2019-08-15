import React from "react"
import { Link } from "gatsby"
import styled, { css, createGlobalStyle } from 'styled-components'
import SEO from "../components/seo"
import Navbar from "../components/navbar";
import HeroImg from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

export const size = {
  small: 400,
  medium: 960,
  large: 1140
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    h1, h2, h3, h4 {
      margin-top: 0;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
      <StyledWrapper>
        <Navbar />
        <HeroImg />
        <About />
        <Services />
        <Contact />
      </StyledWrapper>
  </>
)

export default IndexPage
