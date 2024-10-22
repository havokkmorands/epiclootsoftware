import React from 'react'
import { Container, TextSection, ImageSection } from './styled'

const About = ({ reverse, text, image }) => (
  <Container reverse={reverse}>
    <TextSection>
      <h1>Lorem</h1>
      <p>{text}</p>
    </TextSection>
    <ImageSection>
      <img src={image} alt="Example" />
    </ImageSection>
  </Container>
)

export default About
