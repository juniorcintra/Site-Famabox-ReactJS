import React from "react";

import {
  Container,
  DivHeader,
  Header,
  SubHeader,
  Linha,
  LinhaText,
  De,
  Riscado,
  Apenas,
  PrecoDestaque,
  Avista,
  DivButtons,
  Column,
} from "./styles";

import { AiOutlineCheckCircle } from "react-icons/ai";

import Button from "../../Button";

function InfoBuy({ header, subheader, riscado, apenas, preco, avista }) {
  return (
    <Container>
      <DivHeader>
        <Header>{header}</Header>
        <SubHeader>{subheader}</SubHeader>
      </DivHeader>
      <Column>
        <Linha>
          <AiOutlineCheckCircle color="#6357F6" size={28} />
          <LinhaText>Seguidores brasileiros, reais e ativos</LinhaText>
        </Linha>
        <Linha>
          <AiOutlineCheckCircle color="#6357F6" size={28} />
          <LinhaText>Interagem espontaneamente</LinhaText>
        </Linha>
        <Linha>
          <AiOutlineCheckCircle color="#6357F6" size={28} />
          <LinhaText>Reposição vitalícia</LinhaText>
        </Linha>
        <Linha>
          <AiOutlineCheckCircle color="#6357F6" size={28} />
          <LinhaText>Sem riscos para a sua conta</LinhaText>
        </Linha>
        <Linha>
          <AiOutlineCheckCircle color="#6357F6" size={28} />
          <LinhaText>Não precisamos de sua senha</LinhaText>
        </Linha>
      </Column>
      <Linha>
        <De>De</De>
        <Riscado>{riscado}</Riscado>
      </Linha>
      <Apenas>{apenas}</Apenas>
      <PrecoDestaque>{preco}</PrecoDestaque>
      <Avista>{avista}</Avista>
      <DivButtons>
        <Button
          text="COMPRAR AGORA"
          text2="BOLETO OU CARTÃO"
          state="comprar"
          color="comprar"
        />
        <Button
          text="COMPRAR AGORA"
          text2="PIX OU TRANSFERÊNCIA"
          onClick={() => window.location.assign("/transferencia")}
        />
      </DivButtons>
    </Container>
  );
}

export default InfoBuy;
