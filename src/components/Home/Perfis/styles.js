import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 100px;
  background-color: #330c75;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 90%;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 0;
  height: 520px;

  @media screen and (max-width: 576px) {
    height: unset;
  }
`;

export const VendasIMG = styled.img`
  max-width: 465px;
  width:90%;
`;

export const ContentRight = styled.div`
  max-width: 560px;
  width:90%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 230px;
  margin: 0 8px;

  
  @media screen and (max-width: 550px) {
    padding: 25px 0;
  }
`;

export const Linha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const ColumnTitle = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const LinhaText = styled.span`
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
`;
