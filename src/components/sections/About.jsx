// import React from "react";
// import Text from "../Text.jsx";
import styled, { ThemeProvider } from "styled-components";
import Corousual from "./Carousual.jsx";
import { dark } from "../../Styles/Themes.jsx";
import Button from "./Button";

const Right = styled.div`
  .h2,
  .h21 {
    padding: 25px 0;
    font-weight: 400;
    color: ${(props) => props.theme.body};
  }
  .h2 {
    font-size: ${(props) => props.theme.fontxxl};
    font-weight: 400;
  }

  .h21 {
    font-size: ${(props) => props.theme.fontlg};
    font-size: 24px;
    line-height: 38px;
  }

  .h3 {
    color: #999999;
    font-weight: 400;
    font-size: 19px;
    padding-bottom: 10px;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 10px 0px;
  width: 980%;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: bold;
  font-weight: 700;
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

const About = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Corousual />
                </Box>
                {/* <Box>
          <Text />
        </Box> */}
                <Box>
                    <Right>
                        <h2 className="h2">Welcome To The Weirdos Club.</h2>

                        <h2 className="h21">
                            The WEIRDOS CLUB is a private collection of NFTs—unique digital
                            collectibles. The Weirdos are stored as ERC-721 tokens on the
                            Ethereum blockchain and hosted on IPFS.
                        </h2>

                        <h3 className="h3">
                            With more than 200+ hand drawn traits, each NFT is unique and
                            comes with a membership to an exclusive group of successful
                            investors. Join an ambitious ever-growing community with multiple
                            benefits and utilities.
                        </h3>

                        <ButtonContainer>
                            <ThemeProvider theme={dark}>
                                <Button
                                    class="btn11"
                                    text="Join Our Discord "
                                    links="#about"
                                ></Button>
                            </ThemeProvider>
                        </ButtonContainer>
                    </Right>
                </Box>
            </Container>
        </Section>
    );
};

export default About;
