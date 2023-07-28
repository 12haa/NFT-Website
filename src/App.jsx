// import React from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./Styles/Themes.jsx";
import Navigations from "./components/sections/Navigations";
import Home from "./components/sections/Home";
import Team from "./components/sections/Team";
import About from "./components/sections/About";
import RoadMap from "./components/sections/RoadMap";
import ShowCase from "./components/sections/ShowCase";
import Faq from "./components/sections/Faq";
// import Banner from "./components/sections/Banner";
import Footer from "./components/sections/Footer";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigations />

        <Home />
        <About />
        <RoadMap />
        <ShowCase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
