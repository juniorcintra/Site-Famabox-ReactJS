import React from "react";

import {
  Container,
  Content,
  DivRight,
  VendasIMG,
  Aumente,
  Quantidade,
  Engajamento,
  Instituto,
} from "./styles";

import Button from "../../Button";

import vendasIMG from "../../../assets/images/imagem2.png";

function MaisVendas() {
  return (
    <Container>
      <Content>
        <DivRight>
          <Aumente>UM MERCADO QUE SÓ CRESCE</Aumente>
          <Quantidade>Quer aumentar o número de vendas e parcerias?</Quantidade>
          <Instituto>
            Um Instituto norte-americano divulgou que 90% das pessoas só fazem
            negócios com perfis que tenham no mínimo 10 mil seguidores.
          </Instituto>
          <Engajamento>
            Especialistas afirmam que isso se deve ao fato de a mente humana
            associar quantidade com algo que seja confiável e seguro. E completa
            dizendo que quem não procura aumentar seus números pode estar
            deixando dinheiro na mesa.
          </Engajamento>
          <Button text="Quero mais vendas" />
        </DivRight>
        <VendasIMG src={vendasIMG} />
      </Content>
    </Container>
  );
}

export default MaisVendas;
