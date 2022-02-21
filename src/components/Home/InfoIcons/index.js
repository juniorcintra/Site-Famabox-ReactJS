import React from "react";

import { Container, Icon, Title, Text } from "./styles";

function InfoIcons({ icon, title, text }) {
  return (
    <Container>
      <Icon src={icon} alt="img" />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default InfoIcons;
