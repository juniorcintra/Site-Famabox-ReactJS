import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px 0;  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 90%;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }

  a{
    width: 80%;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 45px 0;
  max-width: 450px;

  @media screen and (max-width: 830px) {
    align-items: center;
  }
`;

export const YoutubeIMG = styled.img`
  max-width: 600px;
  width: 100%;
`;

export const Aumente = styled.span`
  width: 245px;
  color: #fbff30;
  font-family: "Roboto Condensed", Sans-serif;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (max-width: 830px) {
    text-align:center;
  }
`;

export const Quantidade = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 52px;
  font-weight: 600;
  @media screen and (max-width: 830px) {
    text-align:center;
  }
`;

export const Engajamento = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 16px 0;
  @media screen and (max-width: 830px) {
    text-align:center;
  }
`;
