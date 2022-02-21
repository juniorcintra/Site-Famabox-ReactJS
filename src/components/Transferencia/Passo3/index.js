import React from "react";

import { Container, Content, Title, Subtitle, Text } from "./styles";

import Button from "../../Button";

function Passo3() {
  return (
    <Container>
      <Content>
        <Title>Passo 3</Title>
        <Subtitle>
          Após concluir, clique no botão abaixo para nos enviar o @usuário do
          seu Instagram, juntamente com o seu comprovante.
        </Subtitle>
        <Button
          text="Enviar @ e Comprovante"
          onClick={() =>
            window.location.assign(
              "https://api.whatsapp.com/send?phone=5524999544495&text=Ol%C3%A1%2C%20algu%C3%A9m%20pode%20me%20ajudar%3F"
            )
          }
        />
        <Text>
          O (a) atendente responsável verificará o seu comprovante, e assim que
          seu pagamento entrar em nosso sistema, o serviço contratado será
          enviado para o seu perfil no Instagram!
        </Text>
      </Content>
    </Container>
  );
}

export default Passo3;
