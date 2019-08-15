import React from 'react'
import styled from 'styled-components'
import { Button } from './services'

const ContactWeapper = styled.div`
margin: 0;
padding: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
`

const Contact = () => (
  <>
    <ContactWeapper id='contact'>
      <h2>CONTACT</h2>
      <h3>Adress</h3>
      <h3>Phone: 888777666</h3>
      <h3>E-mail: lt@gmail.com</h3>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <Button type='submit'>Submit</Button>
    </ContactWeapper>
  </>
)

export default Contact