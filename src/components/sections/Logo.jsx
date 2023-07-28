// import React from "react";
import styled from "styled-components";
// import "@fontsource-variable/sora";
// import "@fontsource/akaya-telivigala";
import { Link } from "react-router-dom";
const LogoText = styled.h1`
  font-family: "Akaya Telivigale", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">W.</Link>
    </LogoText>
  );
};

export default Logo;
