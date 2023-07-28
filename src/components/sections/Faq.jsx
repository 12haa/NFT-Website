import { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import Accordtion from "./Accordtion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  width: 80%;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;
const Container = styled.div`
  width: 75%;

  line-height: 50px;
  /* height: 700px; */
  margin: 2rem auto;
  display: flex;

  /* gap: 200px; */
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 45%;
`;
const Faq = () => {
  const ref = useRef("");

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom 100%",
      end: "bottom 1%",
      pin: true,
      pinSpacing: false,
      scrub: true,
      markers: true,
    });
    return () => {};
  }, []);

  return (
    <Section ref={ref}>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
        </Box>
        <Box>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
          <Accordtion title="WHERE CAN I FIND MY NFTs?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordtion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
