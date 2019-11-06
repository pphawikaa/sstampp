import React from 'react'
import styled from 'styled-components'
const FixedBackground = styled.div`
  z-index:-2;
  width:100%;
  height: 100vh;
  background-repeat:no-repeat;
  background-position: center;
  position:fixed;
  background-size:cover;
  background-image:url('/img/bg1536x900.png');

    @media (max-width: 1439px){
      background-image:url('/img/bg1440x1024.png');
    }
    @media (max-width: 767px) {
      background-image:url('/img/bg768x1000.png');
    }
    @media only screen and (max-width: 413px){
      background-position: bottom;
      background-image:url('/img/bg414x896.png');
    }
`
export default class background extends React.Component {
  render () {
    return (
      <FixedBackground/>
    )
  }
}