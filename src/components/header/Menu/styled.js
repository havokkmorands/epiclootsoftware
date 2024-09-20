import styled from 'styled-components';


export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 10px 0;
  z-index: 2;
`;


export const MenuContainer = styled.nav`
  display: flex;
  gap: 20px;
`;


export const MenuItem = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 20px;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(160,181,149,255);
  }
`;
