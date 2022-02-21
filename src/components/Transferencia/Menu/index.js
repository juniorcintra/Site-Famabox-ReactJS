import React from "react";

import { Container, Content, Logo } from "./styles";

import { Link } from 'react-router-dom';

import logoIMG from "../../../assets/images/logo.png";

function Menu() {
  return (
    <Container>
      <Content>
      <Link to="/">
          <Logo src={logoIMG} />
        </Link>
      </Content>
    </Container>
  );
}

export default Menu;
