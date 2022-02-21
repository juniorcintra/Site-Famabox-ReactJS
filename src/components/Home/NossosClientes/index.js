import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import {
  Container,
  Content,
  ButtonPrev,
  ButtonNext,
  Slide,
  CarrouselIMG,
  DivTitle,
  Title,
  SubTitle,
  DivBottom,
} from "./styles";

import card1 from "../../../assets/images/1.png";
import card2 from "../../../assets/images/2.png";
import card3 from "../../../assets/images/3.png";
import card4 from "../../../assets/images/4.png";
import card5 from "../../../assets/images/5.png";
import card6 from "../../../assets/images/6.png";
import card7 from "../../../assets/images/7.png";

import Button from "../../Button";

const dataCarrousel = [
  {
    id: "1",
    img: card1,
  },
  {
    id: "2",
    img: card2,
  },
  {
    id: "3",
    img: card3,
  },
  {
    id: "4",
    img: card4,
  },
  {
    id: "5",
    img: card5,
  },
  {
    id: "6",
    img: card6,
  },
  {
    id: "7",
    img: card7,
  },
];

export default function NossosClientes() {
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
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <ButtonPrev onClick={goPrev}>
        <AiFillCaretLeft color="#fff" size={32} />
      </ButtonPrev>
    ),
    renderNextButton: () => (
      <ButtonNext onClick={goNext}>
        <AiFillCaretRight color="#fff" size={32} />
      </ButtonNext>
    ),
  };

  function returnSlides(data) {
    return (
      <Slide>
        <CarrouselIMG src={data.img} />
      </Slide>
    );
  }

  return (
    <Container>
      <Content>
        <DivTitle>
          <SubTitle>NOSSOS CLIENTES</SubTitle>
          <Title>
            Diversos clientes nossos já confirmaram que ao adquirir os nossos
            serviços resultou no aumento de engajamento em suas postagens e
            atraindo cada vez mais pessoas.
          </Title>
        </DivTitle>
        {dataCarrousel && (
          <Swiper getSwiper={updateSwiper} {...params}>
            {dataCarrousel?.map((data) => returnSlides(data))}
          </Swiper>
        )}
        <DivBottom>
          <Button text="quero crescer meu perfil" />
        </DivBottom>
      </Content>
    </Container>
  );
}
