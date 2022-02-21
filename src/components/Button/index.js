import React from "react";

import { Container, Title, SubTitle } from "./styles";

function Button({
  text,
  text2 = "",
  state = "primary",
  color = "normal",
  onClick = () => window.location.assign("#comprar"),
}) {
  return (
    <Container
      state={state}
      color={color}
      text={text}
      text2={text2}
      onClick={onClick}>
      <Title text={text} text2={text2}>
        {text}
      </Title>
      <SubTitle text={text} text2={text2}>
        {text2 !== "" && text2}
      </SubTitle>
    </Container>
  );
}

export default Button;
