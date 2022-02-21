import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  align-self: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: ${({ duvida }) => (duvida ? `30px` : `100px`)};

  margin-top: ${({ duvida }) => (duvida ? `100px` : `0`)};
`;

export const Title = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 45px;
  font-weight: 600;


  @media screen and (max-width: 830px) {
    font-size: 35px;
    text-align: center;
    width: 90%;
  }

  
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    justify-content: center;
`;
