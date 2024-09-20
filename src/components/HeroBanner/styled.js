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
