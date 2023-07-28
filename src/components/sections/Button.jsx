// import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  padding: 0.9rem 2.3rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(0.9);
  }
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 105%;
    height: 115%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
const Button = ({ Link, text }) => {
    return (
        <a href={Link} target="_blank" rel="noreferrer" aria-label={text}>
            <Btn>{text}</Btn>
        </a>
    );
};

export default Button;
