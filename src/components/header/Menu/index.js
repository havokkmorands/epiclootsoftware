import React from 'react';
import { MenuContainer, MenuItem, MenuWrapper } from './styled';

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#about">About Us</MenuItem>
        <MenuItem href="#team">Team</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;
