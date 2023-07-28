// import React from "react";
import styled from "styled-components";
// import Button from "./sections/Button";
// import { dark, light } from "../Styles/Themes.jsx";
// import { ThemeProvider } from "styled-components";

const Container = styled.div`
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
  }

  .h3 {
    color: #999999;
    font-weight: 400;
    font-size: 19px;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.body};
`;

const Text = () => {
  return (
    <Container>
      <Box>
        <h2 className="h2">Welcome To The Weirdos Club.</h2>
      </Box>
      <Box>
        <h2 className="h21">
          The WEIRDOS CLUB is a private collection of NFTs—unique digital
          collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum
          blockchain and hosted on IPFS.
        </h2>
      </Box>
      <Box>
        <h3 className="h3">
          With more than 200+ hand drawn traits, each NFT is unique and comes
          with a membership to an exclusive group of successful investors. Join
          an ambitious ever-growing community with multiple benefits and
          utilities.
        </h3>
      </Box>
      <Box>
        {/* <Button class="btn11" text="Explore " links="#about"></Button> */}
      </Box>
    </Container>
  );
};

export default Text;
