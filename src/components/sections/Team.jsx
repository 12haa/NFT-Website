// import React from "react";
import styled from "styled-components";

import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
// import img10 from "../../assets/Nfts/bighead-10.svg";

import ConfettiComponent from "./Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capatilize;
  width: 80%;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;
const Item = styled.div`
  width: calc(20rem - 3vw);
  padding: 1rem 0;
  height: 340px;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImgContainer = styled.div`
  width: 85%;

  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};

  border-radius: 20px;
  cursor: pointer;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.text};
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
  /* &:hover {
    img {
      transform: scale(1.1);
    }
  } */
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section>
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img9} name="Mahan" position="Best Pos 5" />
        <MemberComponent img={img2} name="Weirdo" position="founder" />
        <MemberComponent img={img3} name="Weirdo" position="founder" />
        <MemberComponent img={img4} name="Weirdo" position="founder" />
        <MemberComponent img={img5} name="Weirdo" position="founder" />
        <MemberComponent img={img6} name="Weirdo" position="founder" />
        <MemberComponent img={img7} name="Weirdo" position="founder" />
        <MemberComponent img={img8} name="Weirdo" position="founder" />
        <MemberComponent img={img8} name="Weirdo" position="founder" />
        <MemberComponent img={img8} name="Weirdo" position="founder" />
      </Container>
    </Section>
  );
};

export default Team;
