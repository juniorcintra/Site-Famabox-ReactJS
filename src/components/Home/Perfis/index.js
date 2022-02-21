import React from "react";

import {
  Container,
  DivTitle,
  Title,
  SubTitle,
  Content,
  DivRight,
  VendasIMG,
  ContentRight,
  Column,
  Linha,
  ColumnTitle,
  LinhaText,
} from "./styles";

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import perfisIMG from "../../../assets/images/perfis.png";

function Perfis() {
  return (
    <Container>
      <DivTitle>
        <Title>COMO AS PESSOAS REAGEM</Title>
        <SubTitle>AOS PERFIS</SubTitle>
      </DivTitle>
      <Content>
        <DivRight>
          <ContentRight>
            <Column>
              <ColumnTitle>Perfis sem números</ColumnTitle>
              <Linha>
                <AiOutlineCloseCircle color="#DF4F94" size={32} />
                <LinhaText>São desconhecidos</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCloseCircle color="#DF4F94" size={32} />
                <LinhaText>Não conseguem parcerias</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCloseCircle color="#DF4F94" size={32} />
                <LinhaText>Baixíssima visibilidade</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCloseCircle color="#DF4F94" size={32} />
                <LinhaText>Não tem engajamento</LinhaText>
              </Linha>
            </Column>
            <Column>
              <ColumnTitle>Nossos clientes</ColumnTitle>
              <Linha>
                <AiOutlineCheckCircle color="#8AF657" size={32} />
                <LinhaText>Tem mais autoridade</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCheckCircle color="#8AF657" size={32} />
                <LinhaText>Fecham muitas parcerias</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCheckCircle color="#8AF657" size={32} />
                <LinhaText>Tem mais visibilidade</LinhaText>
              </Linha>
              <Linha>
                <AiOutlineCheckCircle color="#8AF657" size={32} />
                <LinhaText>Muito mais engajamento</LinhaText>
              </Linha>
            </Column>
          </ContentRight>
        </DivRight>
        <VendasIMG src={perfisIMG} />
      </Content>
    </Container>
  );
}

export default Perfis;
