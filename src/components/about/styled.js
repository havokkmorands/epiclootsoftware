import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
  
`

export const TextSection = styled.div`
  width: 50%;
  padding: 20px;
  color: white;
`

export const ImageSection = styled.div`
  width: 50%;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
