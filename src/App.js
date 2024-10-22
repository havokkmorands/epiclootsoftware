import React from 'react'
import styled from 'styled-components'
import { GlobalCSS } from './globalstyle'
import HeroBanner from './components/HeroBanner'
import Menu from './components/header/Menu'
import Body from './components/Body'
import Container from './components/fixedcontainer'
import About from './components/about'
import risca from './assets/images/misc/risca.webp'
import Team from './components/team'


const AppContainer = styled.div`
  background-color: black; // Fundo escuro para contraste
  height: 100vh;
`;


function App() {
  return (
    <>
    <GlobalCSS/>
      <Menu/>
        <Container>  
        <HeroBanner/>
        <h1>About us</h1>
        <About reverse={false} text="Lorem bla bla bla." image={risca} />
        <About reverse={true} text="Lorem pipipi pópópó." image={risca} />
        <About reverse={false} text="Lorem bla bla bla." image={risca} />
        <div class='centralizar'>
        <h1>Our team</h1>
        </div>        
        <Team></Team>
        </Container>  
    </>
  )
}

export default App;
