import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "./DrawSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Roadmap.css";
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
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 190px;
  /* background-color: lightblue; */

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  /* padding-top: 50px; */
  /* margin-top: 60px; */
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0rem 0;
`;
const RoadMapItem = ({ title, subtext, addToRefs }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}t</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};
const RoadMap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
    return () => {};
  }, []);

  // gsap.registerPlugin(ScrollTrigger);
  // const element = document.getElementsByClassName("road");
  // console.log(element);
  // const t2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: element,
  //     start: "top 80%", // change this to adjust when the animation starts
  //   },
  // });
  // t2.from(element, { opacity: 0, y: 50, duration: 1 });

  // gsap.set(".square", { opacity: 0, x: -800 });
  // const [scrollTrue, setScrollTrue] = useState(false);
  // Create a ScrollTrigger for the element
  ScrollTrigger.create({
    trigger: ".square",
    start: "top 80% ",
    end: "bottom 0%",
    onEnter: function () {
      gsap.from(".square", { opacity: 0, x: -630 });
      gsap.to(".square", { opacity: 1, x: -80, duration: 2 });
    },
    onLeave: function () {
      // gsap.to(".square", { opacity: 0, x: -350, duration: 2 });
    },
  });
  // const [scrollTrue, setScrollTrue] = useState(false);
  // Create a ScrollTrigger for the element
  ScrollTrigger.create({
    trigger: ".square1",
    start: "top 87% ",
    end: "bottom 30%",
    onEnter: function () {
      gsap.from(".square1", { opacity: 0, x: 1230 });
      gsap.to(".square1", { opacity: 1, x: 580, duration: 2 });
    },
    onLeave: function () {
      // gsap.to(".square", { opacity: 0, x: -350, duration: 2 });
    },
  });

  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <div className="square">
            <RoadMapItem
              addToRefs={addToRefs}
              class="RoadMapItem"
              title="Grand Opening"
              subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
            />
          </div>

          <div className="square1">
            <RoadMapItem
              addToRefs={addToRefs}
              title="Great Benefits"
              subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
            />
          </div>
          <RoadMapItem
            addToRefs={addToRefs}
            title="Greate Benefits"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Early Access"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="New Merch"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Holders Ranking"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
          />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
