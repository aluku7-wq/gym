/** @format */
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from "./Hero.styled";
import { Styledelements } from "../globalsyles/Globalstyles.styled";
import Header from "../header/Header";

const Hero = () => {
  return (
    <Container data-scroll-section>
      <Header />
      <div className="body">
        <img src="/images/background/bg7.png" alt="" />
        <div data-scroll data-scroll-speed="2" className="text">
          <Styledelements.Heading1>
            stay <span>healthy</span>
          </Styledelements.Heading1>
          <Styledelements.Heading1>be safe</Styledelements.Heading1>
          <p>
            Instead of just being an another gym equipment retailor, our
            founderswanted to be the best in the industry to set minds doing so
            wonderfull job
          </p>
          <Styledelements.Button>learn more</Styledelements.Button>
          <div className="sliders">
            <div className="slider">
              <MdArrowBackIos />
            </div>
            <div className="slider">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
