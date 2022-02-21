import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: #330c75;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  margin-top: 30px;
`;
