import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #fbff30;
  font-family: "Roboto Condensed", Sans-serif;
  font-size: 45px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`;

export const SubTitle = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 50px;
  font-weight: 600;
  margin: 30px 0;
`;
