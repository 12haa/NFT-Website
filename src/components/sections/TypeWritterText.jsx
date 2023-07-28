// import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const ButtonContainer = styled.div`
  font-size: 19px;
  font-weight: 500;
  .Hero__btn {
    font-weight: 600;
  }
`;

const Title = styled.h5`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: pink;
  width: 80%;
  font-weight: 200;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  font-size: 3rem;
  span {
    text-transform: uppercase;

    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
`;
const SubTitle = styled.h3`
  font-family: "Akaya Telivigala", cursive;
  font-size: 28px;
  padding: 5px;
  margin-top: 10px;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.text},0.6)`};
  font-weight: 450;
  margin-bottom: 1rem;
  width: 80%;
  align-self: center;
`;

const TypeWritertext = () => {
  return (
    <Title>
      Discover A New Era Of Cool
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class ="text-1">NFT... </span>  ')

            .pauseFor(1300)
            .deleteAll()
            .typeString('<span class ="text-2">Collectible Items </span>  ')
            .pauseFor(1300)
            .deleteAll()
            .typeString('<span class ="text-3">API Killers </span>  ')
            .pauseFor(1300)
            .deleteAll()
            .start();
        }}
      />
      <SubTitle>Bored Of Apes ? Try Something New</SubTitle>
      <span className="" style={{ marginLeft: "8px" }}>
        {"~~~~~~~~~~"}
      </span>
      <ButtonContainer>
        <Button class="Hero__btn" text="Explore" link="#about" />
      </ButtonContainer>
    </Title>
  );
};

export default TypeWritertext;
