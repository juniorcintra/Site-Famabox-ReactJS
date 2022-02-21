import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 1000px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 45px 0;
  max-width: 450px;

  @media screen and (max-width: 1100px) {
    align-items: center;
  }
`;

export const Aumente = styled.span`
  color: #fbff30;
  font-family: "Roboto Condensed", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.6px;

  @media screen and (max-width: 1100px) {
    text-align: center;
  }
`;

export const Quantidade = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 38px;
  font-weight: 600;
  width: 250px;

  @media screen and (max-width: 1100px) {
    text-align: center;
  }
`;

export const Engajamento = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;
