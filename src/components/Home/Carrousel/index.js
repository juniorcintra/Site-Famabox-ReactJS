import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import {
  Container,
  ButtonPrev,
  ButtonNext,
  Slide,
  CarrouselIMG,
  CarrouselText,
  DivTitle,
  Title,
  SubTitle,
  DivButtons,
  DivBottom,
} from "./styles";

import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
import card4 from "../../../assets/images/card4.png";
import Button from "../../Button";

const dataCarrousel = [
  {
    id: "1",
    text: "Escolha um plano em nosso site que melhor atenda suas necessidades.",
    img: card1,
  },
  {
    id: "2",
    text: "Ao efetuar o seu pedido conosco, você cadastra o @usuário do seu Instagram, sem precisar mencionar a senha.",
    img: card2,
  },
  {
    id: "3",
    text: "Colocamos o seu perfil em nossa plataforma onde temos milhões de usuários disponívieis para seguir outros perfis.",
    img: card3,
  },
  {
    id: "4",
    text: "Pronto! É só aguardar a chegada dos seus seguidores.",
    img: card4,
  },
];

export default function Carrousel() {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 600,
  };

  function returnSlides(data) {
    return (
      <Slide>
        <CarrouselIMG src={data.img} />
        <CarrouselText>{data.text}</CarrouselText>
      </Slide>
    );
  }

  return (
    <Container>
      <DivTitle>
        <Title>ARRASTE PRO LADO E DESCUBRA</Title>
        <SubTitle>COMO FUNCIONA</SubTitle>
      </DivTitle>
      {dataCarrousel && (
        <Swiper getSwiper={updateSwiper} {...params}>
          {dataCarrousel?.map((data) => returnSlides(data))}
        </Swiper>
      )}
      <DivBottom>
        <DivButtons>
          <ButtonPrev onClick={goPrev}>
            <AiFillCaretLeft color="#fff" size={32} />
          </ButtonPrev>
          <ButtonNext onClick={goNext}>
            <AiFillCaretRight color="#fff" size={32} />
          </ButtonNext>
        </DivButtons>
        <Button text="quero crescer meu perfil" />
      </DivBottom>
    </Container>
  );
}
