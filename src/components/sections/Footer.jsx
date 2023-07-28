// import React from "react";
import { styled } from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../../Icons/Facebook.js";
import Instagram from "../../Icons/Instagram.js";
import Twitter from "../../Icons/Twitter.js";
import LinkedIn from "../../Icons/LinkedIn.js";
const Section = styled.section`
  width: 100%;
  min-height: 53vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin-left: 15rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconsList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;

    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 10px 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconsList>
            <a href="https://facebook.com " target="_blank" rel="noreferrer">
              <Facebook  />
            </a>
            <a href="https://facebook.com " target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://facebook.com " target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="https://facebook.com " target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
          </IconsList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()}Wierdos Club All Rights Reserved
        </span>
        <span>
          Made With &#10084; by{" "}
          <a
            href="https://github.com/12haa"
            target="_blank"
            rel="noopender noreferrer"
          >
            Me
          </a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
