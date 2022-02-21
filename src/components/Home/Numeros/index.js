import React from "react";

import {
  Container,
  Content,
  DivRight,
  Aumente,
  Quantidade,
  DivLeft,
} from "./styles";

import InfoIcons from "../InfoIcons";

import icon1 from "../../../assets/images/icone-1.png";
import icon2 from "../../../assets/images/stars.png";
import icon3 from "../../../assets/images/followers2.png";

function Numeros() {
  return (
    <Container>
      <Content>
        <DivRight>
          <Aumente>NOSSOS NÚMEROS</Aumente>
          <Quantidade>Vem crescer com a gente!</Quantidade>
        </DivRight>
        <DivLeft>
          <InfoIcons
            icon={icon1}
            title="21.017"
            text="Somos uma marca com mais de 20 mil clientes ativos no brasil"
          />
          <InfoIcons
            icon={icon2}
            title="28.23"
            text="Já entregamos mais de 28 mil pedidos para nossos clientes"
          />
          <InfoIcons
            icon={icon3}
            title="31.6M"
            text="Já entregamos mais de 30 milhões de seguidores!"
          />
        </DivLeft>
      </Content>
    </Container>
  );
}

export default Numeros;
