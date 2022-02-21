import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  min-width: 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #4d4f95 0%, #2b2d66 100%);
  margin: 8px;
`;

export const DivHeader = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 15px;
  background-color: #2b2d66;
  border-radius: 10px 10px 10px 10px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.span`
  font-family: "Roboto", Sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 0.8em;
  color: #ffce00;
`;

export const SubHeader = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 0.8em;
  margin: 8px 0;
`;

export const Linha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const LinhaText = styled.span`
  font-size: 12px;
  color: #fff;
  margin-left: 8px;
`;

export const De = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 25px;
  font-weight: normal;
`;

export const Riscado = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 25px;
  font-weight: normal;
  text-decoration: line-through;
  margin-left: 8px;
`;

export const Apenas = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 21px;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;

export const PrecoDestaque = styled.span`
  color: #61ce70;
  font-family: "Roboto", Sans-serif;
  font-size: 59px;
  font-weight: 600;
  text-align: center;
`;

export const Avista = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 21px;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
