import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button } from '../components/services'

const More = styled.div`
  background-image: none;
  width: 100%;
  min-height: 100vh;
  background-color: blue;
`

const ReadMore = () => (
  <>
    <More>
      <h1>Read more</h1>
      <Link to={'/'}>
        <Button>Go back</Button>
      </Link>
    </More>
  </>
)

export default ReadMore