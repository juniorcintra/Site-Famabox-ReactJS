import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Column = styled.div`
  width: 100%;
  max-width: 385px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Item = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 8px;
  border-bottom: 1px solid #fff;
`;

export const Title = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 25px;
  font-weight: 600;
`;

export const Linha = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Preco = styled.span`
  color: #ffffff;
`;

export const Subtitle = styled.span`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;
