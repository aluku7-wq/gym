/** @format */
// import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from "./Hero.styled";
import { Styledelements } from "../globalsyles/Globalstyles.styled";
import Header from "../header/Header";
// import { useContext } from "react";
// import { GymContext } from "../statemanager/Statemanager";
import { AnimatePresence } from "framer-motion";
const Hero = () => {
  // const globalstate = useContext(GymContext);
  // const dispatch = globalstate.cursorDispatch;

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <Header />
      </AnimatePresence>

      <div className="body">
        <div className="image">
          <img src="/images/background/bg7.png" alt="" />
        </div>

        <div data-scroll data-scroll-speed="2" className="text">
          <Styledelements.Heading1>
            stay <span>healthy</span>
          </Styledelements.Heading1>
          <Styledelements.Heading1>be safe</Styledelements.Heading1>
          <Styledelements.Paragraph>
            Instead of just being an another gym equipment retailor, our
            founderswanted to be the best in the industry to set minds doing so
            wonderfull job
          </Styledelements.Paragraph>
          <Styledelements.Button>learn more</Styledelements.Button>
          {/* <div className="sliders">
            <div
              className="slider"
              onMouseEnter={() => dispatch({ type: "SHRINK" })}
              onMouseLeave={() => dispatch({ type: "EXPAND" })}>
              <MdArrowBackIos />
            </div>
            <div
              className="slider"
              onMouseEnter={() => dispatch({ type: "SHRINK" })}
              onMouseLeave={() => dispatch({ type: "EXPAND" })}>
              <MdArrowForwardIos />
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
