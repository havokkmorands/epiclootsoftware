import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`

export const Item = styled.a`
  display: flex;
  flex: 1 1 22%;
  margin: 10px;
  padding: 20px;
  background-color: #f1f1f1;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 1024px) {
    flex: 1 1 45%;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
`

export const FooterText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
`
