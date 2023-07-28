// import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
  ${"" /* It Can Be Accesed Byt The Children Of A React Component */}
  height: ${(props) => props.theme.navHeight};

  margin: 0 auto;
`;
const Menu = styled.ul`
  justify-content: space-between;
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
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

const Navigations = () => {
    return (
        <Section>
            <NavBar>
                <Logo />
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>RoadMap</MenuItem>
                    <MenuItem>Showcase</MenuItem>
                    <MenuItem>Faq</MenuItem>
                    <MenuItem>Team</MenuItem>
                    {/* <MenuItem>Home</MenuItem> */}
                </Menu>
                <Button text="Connect Wallet" Link="https://google.com  " />
            </NavBar>
        </Section>
    );
};

export default Navigations;
