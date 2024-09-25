import React from 'react'
import styled from 'styled-components'
import { GlobalCSS } from './globalstyle'
import HeroBanner from './components/HeroBanner'
import Menu from './components/header/Menu'
import Body from './components/Body'

const AppContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* Responsividade para tablets e celulares */
    background-color: darkgray;
  }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalCSS />
      <AppContainer>
        <Menu />
        <HeroBanner />
        <Body />
      </AppContainer>
    </>
  )
}

export default App;
