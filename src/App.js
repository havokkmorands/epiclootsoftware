import React from 'react'
import styled from 'styled-components'
import { GlobalCSS } from './globalstyle'
import HeroBanner from './components/HeroBanner'
import Menu from './components/header/Menu'
import Body from './components/Body'


const AppContainer = styled.div`
  background-color: black; // Fundo escuro para contraste
  height: 100vh;
`;


function App() {
  return (
    <>
    <GlobalCSS/>
      <Menu/>    
        <HeroBanner/>
        <Body/>
    </>
  )
}

export default App;
