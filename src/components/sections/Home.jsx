// import React from "react";
import styled from "styled-components";
import TypeWriterText from "./TypeWritterText.jsx";
import CoverVideo from "./CoverVideo";
// import Team from "./Team";
const Section = styled.section`
  min-height: ${(props) => `calc(100vh-${props.theme.navHeight}) `};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  min-height: 80vh;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <h1>
            <TypeWriterText />
          </h1>
        </Box>
        <Box>
          <h1>
            <CoverVideo />
          </h1>
        </Box>
      </Container>
      {/* <Team /> */}
    </Section>
  );
};

export default Home;
