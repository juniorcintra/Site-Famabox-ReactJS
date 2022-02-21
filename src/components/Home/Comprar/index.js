import React from "react";

import {
  Container,
  Content,
  DivTitle,
  Title,
  SubTitle,
  DivBottom,
} from "./styles";

import InfoBuy from "../InfoBuy";

export default function Comprar() {
  return (
    <Container id="comprar">
      <Content>
        <DivTitle>
          <SubTitle>IMPERDÍVEL!!!</SubTitle>
          <Title>ESTAMOS DANDO DE BRINDE 10% A MAIS DE SEGUIDORES!!!</Title>
        </DivTitle>
        <DivBottom>
          <InfoBuy
            header="500 SEGUIDORES"
            subheader="+ 50 SEGUIDORES DE BÔNUS"
            riscado="R$79,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 5,70"
            avista="OU R$57,00 À VISTA"
          />
          <InfoBuy
            header="1.000 SEGUIDORES"
            subheader="+ 100 SEGUIDORES DE BÔNUS"
            riscado="R$99,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 7,70"
            avista="OU R$77,00 À VISTA"
          />
          <InfoBuy
            header="2.000 SEGUIDORES"
            subheader="+ 200 SEGUIDORES DE BÔNUS"
            riscado="R$190,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 14,70"
            avista="OU R$147,00 À VISTA"
          />
          <InfoBuy
            header="3.000 SEGUIDORES"
            subheader="+ 300 SEGUIDORES DE BÔNUS"
            riscado="R$299,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 21,70"
            avista="OU R$217,00 À VISTA"
          />
          <InfoBuy
            header="5.000 SEGUIDORES"
            subheader="+ 500 SEGUIDORES DE BÔNUS"
            riscado="R$490,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 34,70"
            avista="OU R$347,00 À VISTA"
          />
          <InfoBuy
            header="10.000 SEGUIDORES"
            subheader="+ 1.000 SEGUIDORES DE BÔNUS"
            riscado="R$990,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 66,70"
            avista="OU R$667,00 À VISTA"
          />
          <InfoBuy
            header="20.000 SEGUIDORES"
            subheader="+ 2.000 SEGUIDORES DE BÔNUS"
            riscado="R$1.990,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 129,70"
            avista="OU R$1.297,00 À VISTA"
          />
          <InfoBuy
            header="50.000 SEGUIDORES"
            subheader="+ 5.000 SEGUIDORES DE BÔNUS"
            riscado="R$5.990,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 319,70"
            avista="OU R$3.197,00 À VISTA"
          />
          <InfoBuy
            header="100.000 SEGUIDORES"
            subheader="+ 10.000 SEGUIDORES DE BÔNUS"
            riscado="R$11.990,90"
            apenas="POR APENAS 10X DE"
            preco="R$ 599,70"
            avista="OU R$5.997,00 À VISTA"
          />
        </DivBottom>
      </Content>
    </Container>
  );
}
