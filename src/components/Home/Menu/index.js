import React from "react";

import { Container, Content, Logo, LogoMenor } from "./styles";

import { Link } from 'react-router-dom';

import Button from "../../Button";

import logoIMG from "../../../assets/images/logo.png";
import logoIMGMenor from '../../../assets/images/famaBOXMenor.png';

function Menu() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={logoIMG} />
          <LogoMenor src={logoIMGMenor} />
        </Link>
        <Button text="QUERO MAIS SEGUIDORES" />
      </Content>
    </Container>
  );
}

export default Menu;
