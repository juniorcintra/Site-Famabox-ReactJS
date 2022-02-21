import React from "react";
import LinhaPIx from "../LinhaPIx";

import { Container, Content, Title, Divider, Passo, SubTitle } from "./styles";

function Passo1() {
  return (
    <Container id="comprar">
      <Content>
        <Title>Como fazer minha transferência em apenas 3 passos?</Title>
        <Divider />
        <Passo>Passo 1</Passo>
        <SubTitle>
          Confirme o valor do pacote que deseja referente a promoção do dia.
        </SubTitle>
        <LinhaPIx />
      </Content>
    </Container>
  );
}

export default Passo1;
