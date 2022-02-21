import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const ButtonPrev = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  transition: 300ms ease;

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
  width: 50px;
  height: 70px;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  transition: 300ms ease;

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
  width: 490px;
  background-color: #fff;
  margin: 0 50px;
  border-radius: 10px 10px 10px 10px;
`;

export const CarrouselIMG = styled.img`
  width: 100%;
  border-radius: 10px 10px 10px 10px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
