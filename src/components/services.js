import React from 'react'
import styled from 'styled-components'

const HelpWrapper = styled.div`
margin: 0;
padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #FAFAFA; 
`
export const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 18px;
  color: white;
  font-size: 1.5rem;
  border: none;
  ${({ type }) => type === 'book' && 'background: tomato;'}

  &:hover {
    background: grey;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  }
` 

const Services = () => (
  <>
    <HelpWrapper id='services'>
      <h1>HOW CAN I HELP YOU</h1>
      <div>
        <h2>ONE ON ONE COACHING</h2>
        <h3>1 hr | 100 PLN</h3>
        <h3>Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers...</h3>
        <Button type='book'>Book It</Button>
      </div>
    </HelpWrapper>
  </>
)

export default Services