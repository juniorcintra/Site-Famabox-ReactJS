import React, { useState } from "react";

import {
  Container,
  Content,
  Title,
  Subtitle,
  DivChave,
  DivTitleChave,
  ChaveTitle,
  ChavePix,
  ChaveSubtitle,
  DivTED,
  TitleTED,
  LinhaTED,
  DocTED,
  DadoTED,
  DivButton,
  MessageCopied,
} from "./styles";

import Button from "../../Button";

function Passo2() {
  const [textCopied, setTextCopied] = useState(null);

  function copyToClipboard() {
    var textField = document.createElement("textarea");
    textField.innerText = "42.258.811/0001-37";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setTextCopied({ message: "Texto copiado!", content: textField.innerText });
  }

  return (
    <Container>
      <Content>
        <Title>Passo 2</Title>
        <Subtitle>
          Transfira o valor referente ao pacote escolhido para os dados abaixo
          optando por PIX, TED OU DOC e salve seu comprovante.
        </Subtitle>
        <DivChave>
          <DivTitleChave>
            <ChaveTitle>Chave PIX (CNPJ)</ChaveTitle>
            <ChavePix>42.258.811/0001-37</ChavePix>
          </DivTitleChave>
          <ChaveSubtitle>
            Clique no botão roxo para copiar a chave pix.
          </ChaveSubtitle>
          <DivButton>
            <Button text="copiar" onClick={() => copyToClipboard()} />
            {textCopied !== null && (
              <MessageCopied>{textCopied.message}</MessageCopied>
            )}
          </DivButton>
        </DivChave>
        <DivTED>
          <TitleTED>TED ou DOC</TitleTED>
          <LinhaTED>
            <DocTED>Nome:</DocTED>
            <DadoTED>Agencia Mais Viral LTDA</DadoTED>
          </LinhaTED>
          <LinhaTED>
            <DocTED>CNPJ:</DocTED>
            <DadoTED>42.258.811/0001-37</DadoTED>
          </LinhaTED>
          <LinhaTED>
            <DocTED>Banco:</DocTED>
            <DadoTED>077 – Intermedium S.A.</DadoTED>
          </LinhaTED>
          <LinhaTED>
            <DocTED>Conta:</DocTED>
            <DadoTED>13339753-0</DadoTED>
          </LinhaTED>
          <LinhaTED>
            <DocTED>Agência:</DocTED>
            <DadoTED>0001</DadoTED>
          </LinhaTED>
          <LinhaTED>
            <DocTED>Tipo:</DocTED>
            <DadoTED>Conta corrente e pessoa jurídica</DadoTED>
          </LinhaTED>
        </DivTED>
      </Content>
    </Container>
  );
}

export default Passo2;
