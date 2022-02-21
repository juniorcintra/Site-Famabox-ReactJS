import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background-color: #330c75;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 1100px;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 45px 0;
`;

export const VendasIMG = styled.img`
  max-width: 465px;
`;

export const Aumente = styled.span`
  color: #fbff30;
  font-family: "Roboto Condensed", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.6px;
`;

export const Quantidade = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 50px;
  font-weight: 600;
`;

export const Engajamento = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 16px 0%;
`;

export const Instituto = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: bold;
`;
