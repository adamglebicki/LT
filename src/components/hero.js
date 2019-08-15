import React from 'react'
import styled from 'styled-components'
import { Button } from './services'
import { above, size } from '../pages/index'

// const Hero = styled.div`
//   padding-top: 80px; 
//   min-height: 100vh;
//   background-color: #FAFAFA;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   font-size: 30px;
// `  

// const Nav = styled.div`
//   background-color: #000;
//   align-self: stretch;
//   padding: 15px 0;
// `

// const Header = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   flex-basis: 25vh;
//   background-color: royalblue;
// `

// const Section = styled.div`
//   display: flex;
//   flex-grow: 1;
//   background-color: gold;
//   width: 100%;
//   max-width: 1200px;
// `

// const Main = styled.div`
//   flex-grow: 1;
//   background-color: grey;
// `

// const Aside = styled.div`
//   flex-basis: 30%;
//   min-width: 280px;
// `

// const Stopka = styled.div`
//  background-color: pink;
//  align-self: stretch;
//  /* width: 100%; */
//  flex-basis: 10vh;
// `

const Hero = styled.div`
  /* display: flex; */
  min-height: 200px;
  width: 100%;
  background-color: #FAFAFA;
`

const HeroImg = () => (
  <>
    <Hero id='home'>
    <div>
      <h4>AMBITION IS THE FIRST STEP TOWARDS SUCCESS</h4>
      <h1>SUCCESS</h1>
    </div>
      <Button type='book'>Book Now</Button>
    </Hero>
  </>
)

export default HeroImg