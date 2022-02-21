import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  min-height: 242px;
  background-image: linear-gradient(180deg, #4d4f95 0%, #2b2d66 100%);
  border-radius: 10px;
  position: relative;
  padding: 16px;
  margin: 0 16px;

  @media screen and (max-width: 830px) {
    margin: 50px 12px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: -70px;
  left: 30px;
`;

export const Title = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin-top: 90px;
  width: 100%;
  text-align: center;
  display: block;
  @media screen and (max-width: 830px) {
    font-size: 35px;
  }
`;

export const Text = styled.span`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  display: block;
`;
