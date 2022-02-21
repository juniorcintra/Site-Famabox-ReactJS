import React from "react";

import { Container, Content, Title, SubTitle } from "./styles";

import Button from "../../Button";

function Header() {
  return (
    <Container>
      <Content>
        <Title>TEM ALGUMA DÚVIDA ANTES DE REALIZAR SUA TRANSFERÊNCIA?</Title>
        <SubTitle>Clique no botão abaixo:</SubTitle>
        <Button
          text="tenho dúvidas"
          onClick={() =>
            window.location.assign(
              "https://api.whatsapp.com/send?phone=5524999544495&text=Ol%C3%A1%2C%20algu%C3%A9m%20pode%20me%20ajudar%3F"
            )
          }
        />
      </Content>
    </Container>
  );
}

export default Header;
