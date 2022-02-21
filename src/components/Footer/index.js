import React from "react";

import {
  Container,
  Content,
  DivLeft,
  DivRight,
  Email,
  Termos,
  Cnpj,
  Direitos,
} from "./styles";

function Footer() {
  return (
    <Container>
      <Content>
        <DivLeft>
          <img
            width="245"
            alt=""
            data-srcset="https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO.png 556w, https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO-300x67.png 300w"
            data-src="https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO.png"
            data-sizes="(max-width: 556px) 100vw, 556px"
            class="attachment-large size-large lazyloaded"
            src="https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO.png"
            sizes="(max-width: 556px) 100vw, 556px"
            srcset="https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO.png 556w, https://maisviral.com.br/wp-content/uploads/2021/10/SITEBLINDADO-300x67.png 300w"
          />
          <Email> atendimento@maisviral.com.br </Email>
        </DivLeft>
        <Termos>Termos e condições</Termos>
        <DivRight>
          <Cnpj>Cnpj: 42.258.811/0001-37</Cnpj>
          <Direitos>
            © 2016. Agência Mais Viral. Todos direitos reservados​
          </Direitos>
        </DivRight>
      </Content>
    </Container>
  );
}

export default Footer;
