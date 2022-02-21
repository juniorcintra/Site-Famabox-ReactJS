import styled from "styled-components";

export const Container = styled.div`
  background-color: #330c75;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 1000px;
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 255px;
  height: 120px;
`;

export const Email = styled.span`
  color: #fff;
`;

export const Termos = styled.button`
  color: #fff;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Cnpj = styled.span`
  color: #fff;
`;

export const Direitos = styled.button`
  color: #fff;
`;
