import React from "react";

import {
  Container,
  Column,
  Item,
  Linha,
  Title,
  Preco,
  Subtitle,
} from "./styles";

function LinhaPIx() {
  return (
    <Container>
      <Column>
        <Item>
          <Title>500 seguidores</Title>
          <Linha>
            <Preco>R$ 57,00</Preco>
            <Subtitle>+ 50 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>1.000 seguidores</Title>
          <Linha>
            <Preco>R$ 77,00</Preco>
            <Subtitle>+ 100 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>2.000 seguidores</Title>
          <Linha>
            <Preco>R$ 147,00</Preco>
            <Subtitle>+ 200 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>3.000 seguidores</Title>
          <Linha>
            <Preco>R$ 217,00</Preco>
            <Subtitle>+ 300 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>5.000 seguidores</Title>
          <Linha>
            <Preco>R$ 347,00</Preco>
            <Subtitle>+ 500 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
      </Column>
      <Column>
        <Item>
          <Title>10.000 seguidores</Title>
          <Linha>
            <Preco>R$ 667,00</Preco>
            <Subtitle>+ 1.000 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>20.000 seguidores</Title>
          <Linha>
            <Preco>R$ 1.297,00</Preco>
            <Subtitle>+ 2.000 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>50.000 seguidores</Title>
          <Linha>
            <Preco>R$ 3.197,00</Preco>
            <Subtitle>+ 5.000 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
        <Item>
          <Title>100.000 seguidores</Title>
          <Linha>
            <Preco>R$ 5.997,00</Preco>
            <Subtitle>+ 10.000 seguidores de bônus</Subtitle>
          </Linha>
        </Item>
      </Column>
    </Container>
  );
}

export default LinhaPIx;
