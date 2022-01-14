import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import {Center, Container, Left, Wrapper, Right, Language, SearchContainer, Input, Logo, MenuItem} from './NavbarElements';
import { Badge } from '@material-ui/core';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>MCA.</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar
