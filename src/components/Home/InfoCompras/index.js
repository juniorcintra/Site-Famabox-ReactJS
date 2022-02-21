import React from "react";
import { Container, DivTitle, Title, DivLeft } from "./styles";

import InfoIcons from "../InfoIcons";
import Button from "../../Button";

import icon1 from "../../../assets/images/safe.png";
import icon2 from "../../../assets/images/check.png";
import icon3 from "../../../assets/images/calendar.png";
import icon4 from "../../../assets/images/payment.png";

function InfoCompras() {
  return (
    <Container>
      <DivTitle>
        <Title>INFORMAÇÕES DE COMPRA</Title>
      </DivTitle>
      <DivLeft>
        <InfoIcons
          icon={icon1}
          title="Compra segura"
          text="Somos uma empresa especializada em Marketing Digital e já estamos há 4 anos ajudando as pessoas a crescerem em suas carreiras com nossos envios de seguidores!"
        />
        <InfoIcons
          icon={icon2}
          title="Trabalho Sério"
          text="Trabalhamos no mercado sempre operando de maneira correta, com alvará de funcionamento e CNPJ regularizado.​"
        />
        <InfoIcons
          icon={icon3}
          title="Prazo de Entrega"
          text="Qualquer serviço inicia o envio em até 2 dias úteis! E garantimos que todos os serviços iniciem dentro do prazo!"
        />
        <InfoIcons
          icon={icon4}
          title="Formas de Pagamento​"
          text="Todos os cartões de crédito em até 12 vezes, boleto bancário e transferência ou pix.​"
        />
      </DivLeft>
      <DivTitle duvida>
        <Title>FICOU COM ALGUMA DÚVIDA?</Title>
      </DivTitle>
      <Button
        text="sim, tenho duvidas"
        onClick={() =>
          window.location.assign(
            "https://api.whatsapp.com/send?phone=5524999544495&text=Ol%C3%A1%2C%20algu%C3%A9m%20pode%20me%20ajudar%3F"
          )
        }
      />
    </Container>
  );
}

export default InfoCompras;
