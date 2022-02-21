import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: #330c75;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 880px) {
    font-size: 35px;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #fff;
  margin-bottom: 30px;
`;

export const Passo = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const SubTitle = styled.span`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 880px) {
    font-size: 18px;
    text-align: center;
  }
`;
