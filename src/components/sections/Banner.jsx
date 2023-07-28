// import React from "react";
import styled from "styled-components";
// import Button from "./Button";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
const Section = styled.section`
  width: 100%;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  /* border-top: 2px solid ${(props) => props.theme.text}; */
  background-color: ${(props) => `rgba(${props.theme.textRgba} , 0.9)`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  img {
    width: 15rem;
    height: auto;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 10rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 2px 2px ${(props) => props.theme.text};
  /* margin-right: -400px; */
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  padding: 0 10rem;
  justify-content: flex-end;
`;
const JoinNow = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  padding: 1.2rem 1.4rem;
  cursor: pointer;
  border-radius: 50px;
  font-size: ${(props) => props.theme.fontxl};
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
    border: 2px solid ${(props) => props.theme.body};
    width: 105%;
    height: 115%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img2} alt="The Wierdos " />
        <img src={img3} alt="The Wierdos " />
        <img src={img4} alt="The Wierdos " />
        <img src={img5} alt="The Wierdos " />
        <img src={img6} alt="The Wierdos " />
        <img src={img7} alt="The Wierdos " />
        <img src={img8} alt="The Wierdos " />
      </ImgContainer>
      <Title>
        Join <br /> Wirdos Club!
      </Title>
      <BtnContainer>
        <JoinNow>Join Now </JoinNow>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
