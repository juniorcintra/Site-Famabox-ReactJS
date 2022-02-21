import styled from "styled-components";

export const Container = styled.button`
  text-transform: uppercase;
  color: #fff;

  border: ${({ color }) =>
    color !== "normal" ? `2px solid #330c75` : `2px solid #CE217B`};
  padding: 16px;
  border-radius: 8px;
  /* max-width: 220px; */
  background-color: ${({ state }) =>
    state !== "primary" ? `#330c75` : `#CE217B`};
  margin-top: ${({ state }) => (state !== "primary" ? `0` : `8px`)};
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-transition: background 0.3s ease-out;
  -moz-transition: background 0.3s ease-out;
  -o-transition: background 0.3s ease-out;
  transition: background 0.3s ease-out;

  &:hover {
    background: transparent;
  }
`;

export const Title = styled.span`
  font-size: ${({ text, text2 }) => (text2 !== "" ? `28px;` : `15px;`)};
  font-family: "Roboto Condensed", Sans-serif;
  font-weight: bold;
  fill: #ffffff;
  color: #ffffff;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const SubTitle = styled.span`
  font-size: 15px;
  font-family: "Roboto Condensed", Sans-serif;
  font-weight: bold;
  fill: #ffffff;
  color: #ffffff;
`;
