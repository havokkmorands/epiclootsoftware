import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`

export const ItemCaption = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  text-align: center;
  color: white;
`
