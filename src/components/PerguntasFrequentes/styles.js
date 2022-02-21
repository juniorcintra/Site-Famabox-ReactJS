import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  .swiper-pagination {
    margin-bottom: 38px;
  }

  .swiper-pagination-bullet {
    background: #ccc;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }
`;

export const ButtonPrev = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  transition: 300ms ease;
  position: absolute;
  z-index: 999;
  left: -5px;
  top: 40%;
  background-color: #ccc;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 576px) {
    left: 48px;
    top: 40%;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.span`
  color: #fbff30;
  font-family: "Roboto Condensed", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  text-align: center;
  margin: 16px 0;
`;

export const SubTitle = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 45px;
  font-weight: 600;
`;

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  transition: 300ms ease;
  position: absolute;
  z-index: 999;
  right: -5px;
  top: 40%;
  background-color: #ccc;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 48px;
  }

  @media screen and (max-width: 576px) {
    right: 48px;
    top: 40%;
  }
`;

export const Slide = styled.div`
  width: 280px;
  margin: 0 20px;
`;

export const CarrouselIMG = styled.img`
  width: 280px;
`;

export const CarrouselText = styled.p`
  padding: 16px;
  color: #7a7a7a;
  font-family: "Roboto", Sans-serif;
  font-size: 22px;
  font-weight: 600;
`;

export const DivButtons = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;

export const DivBottom = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;

  .accordion-header {
    width: 500px;
  }
  .accordion-collapse {
    width: 500px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
  margin: 0 8px;

  .accordion-item {
    background-color: unset !important;
    color: #fbff30;
  }

  .accordion-button::after {
    background-image: url("https://img.icons8.com/ios-glyphs/90/fbff30/expand-arrow--v2.png");
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("https://img.icons8.com/ios-glyphs/90/fbff30/expand-arrow.png");
    transform: rotate(-180deg);
  }

  .accordion-button:focus {
    border-color: #fbff30;
  }

  .accordion-button {
    color: #fff;
    background-color: unset;
  }
`;
