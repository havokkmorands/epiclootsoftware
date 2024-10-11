import styled from 'styled-components'

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center
  justify-content: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  display: flex;
  width: 40%;
  height: 30%;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
`

export const HeroText = styled.p`
  color: white;
  font-size: 3.1vh;
`