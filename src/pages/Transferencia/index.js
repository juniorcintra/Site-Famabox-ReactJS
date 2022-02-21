import React from "react";
import PerguntasFrequentes from "../../components/PerguntasFrequentes";
import Header from "../../components/Transferencia/Header";
import Menu from "../../components/Transferencia/Menu";
import Passo1 from "../../components/Transferencia/Passo1";
import Passo2 from "../../components/Transferencia/Passo2";
import Passo3 from "../../components/Transferencia/Passo3";
import Footer from "../../components/Footer";

import { Container } from "./styles";

export default function Transferencia() {
  return (
    <Container>
      <Menu />
      <Header />
      <Passo1 />
      <Passo2 />
      <Passo3 />
      <PerguntasFrequentes pix={true} />
      <Footer />
    </Container>
  );
}
