import styled from "styled-components";

export const Container = styled.div`
  background-color: #330c75;
  width: 100%;
  height: 100px;
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
  width: 90%;
`;

export const Logo = styled.img`
  width: 280px;
  height: 84px;

  @media screen and (max-width: 576px) {
    display:none;
  }
`;

export const LogoMenor = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (min-width: 577px) {
    display:none;
  }
`;

