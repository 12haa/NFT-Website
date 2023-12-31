import  { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Vector from "../../Icons/Vector.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const Bounce = keyframes`
from {transform :translateX(-50%) scale(0.5)}
to {transform :translateX(-50%) scale(1)}

`;

const Ball = styled.div`
  position: absolute;
  top: 0rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /* background-color:${(props) => props.theme.text}; */
  background-color: black;
  animation: ${Bounce} 0.5s linear infinite alternate;
`;

const DrawSvg = () => {
  const ref = useRef(null);
  const ballref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];
    const length = svg.getTotalLength();
    // Start positioning of the svg :

    svg.style.strokeDasharray = length;

    // Hidiing svg Before Scrolling :
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;
          // Reversing The Drawing
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            console.log("active");
            ballref.current.style.display = "none";
          } else {
            console.log(" not active");
            ballref.current.style.display = "inline-block";
          }
        },
      },
    });
    return () => {
      if (t1) t1.kill();
    };
  }, []);
  // const ref = useRef(null);
  return (
    <>
      <Ball ref={ballref} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
