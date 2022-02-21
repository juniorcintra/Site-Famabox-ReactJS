import React from "react";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/Home/Menu";
import MaisVendas from "../../components/Home/MaisVendas";

import { Container } from "./styles";
import Perfis from "../../components/Home/Perfis";
import Carrousel from "../../components/Home/Carrousel";
import Numeros from "../../components/Home/Numeros";
import NossosClientes from "../../components/Home/NossosClientes";
import PerguntasFrequentes from "../../components/PerguntasFrequentes";
import Comprar from "../../components/Home/Comprar";
import InfoCompras from "../../components/Home/InfoCompras";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Banner />
      <MaisVendas />
      {/* <Carrousel />
      <Perfis />
      <Numeros />
      <NossosClientes />
      <PerguntasFrequentes />
      <Comprar />
      <InfoCompras />
      <Footer /> */}
    </Container>
  );
}
