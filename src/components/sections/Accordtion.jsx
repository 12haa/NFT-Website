import { useState } from "react";
import styled from "styled-components";
import { Minus } from "../../Icons/Minus.js";
import { Plus } from "../../Icons/Plus.js";
const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouseColor};
  margin: 3rem 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Reaveal = styled.div`
  display: ${(props) => (props.clicked ? "block " : "none")};
  margin-top: 1rem;
  color: lightgray;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Indicator = styled.span`
  display: flex;
  justify-content: center;

  font-size: ${(props) => props.theme.fontxxl};
  align-items: center;
  font-size: 25px;
  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }
`;

const Accordtion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        {title}
        <Name>
          {collapse ? (
            <Indicator>
              <Minus />
            </Indicator>
          ) : (
            <Indicator>
              <Plus />
            </Indicator>
          )}
        </Name>
      </Title>
      <Reaveal clicked={collapse}>{children}</Reaveal>
    </Container>
  );
};

export default Accordtion;
