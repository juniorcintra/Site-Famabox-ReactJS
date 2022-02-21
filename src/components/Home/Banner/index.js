import React from "react";

import {
  Container,
  Content,
  DivRight,
  YoutubeIMG,
  Aumente,
  Quantidade,
  Engajamento,
} from "./styles";

import Button from "../../Button";

import youtubeIMG from "../../../assets/images/banner-youtube.png";

function Banner() {
  return (
    <Container>
      <Content>
        <DivRight>
          <Aumente>AUMENTE RAPIDAMENTE A</Aumente>
          <Quantidade>Quantidade de seguidores</Quantidade>
          <Engajamento>
            Faça o seu perfil bombar com mais visibilidade e engajamento
          </Engajamento>
          <Button text="QUERO MAIS SEGUIDORES" />
        </DivRight>
        <a href="https://www.google.com.br" alt="link">
          <YoutubeIMG src={youtubeIMG} />
        </a>
      </Content>
    </Container>
  );
}

export default Banner;
