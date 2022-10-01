/** @format */

import React from "react";
import { Styledelements } from "../globalsyles/Globalstyles.styled";
import { Container } from "./About.styled";
import { ImHappy2 } from "react-icons/im";
import { MdPerson } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiCoffeeCup } from "react-icons/gi";

const About = () => {
  return (
    <Container>
      <div className="top">
        <Styledelements.Heading1>
          <span>Ab</span>out
        </Styledelements.Heading1>
        <img src="./images/background/dumbel.png" alt="" />
      </div>
      <div className="body">
        <div className="burner">
          <div className="image">
            <span></span>
            <img src="./images/background/dump.png" alt="" />
          </div>
          <div className="budge">
            <h2>12</h2>
            <p>years of leading</p>
          </div>
        </div>
        <div className="text">
          <Styledelements.Heading3>
            <span></span>ABOUT US
          </Styledelements.Heading3>
          <Styledelements.Heading1>
            benefits of joining our gym
          </Styledelements.Heading1>
          <Styledelements.Paragraph>
            finhub was founded in 2002 as a family owned and operated business
            which spacialises in supplying hign quality gym equipment at great
            prices.
          </Styledelements.Paragraph>
          <Styledelements.Paragraph>
            Over the last two decades Finhub has grown into one of australia's
            largest on online fitness equipment retailers, helping thousands of
            customers live longer, happier and healthy lives
          </Styledelements.Paragraph>
          <Styledelements.Button>Explore more</Styledelements.Button>
        </div>
      </div>
      <div className="bottom">
        <div className="burner">
          <div className="card">
            <ImHappy2 />
            <div className="text">
              <Styledelements.Heading1>874</Styledelements.Heading1>
              <Styledelements.Heading3>happy clients</Styledelements.Heading3>
            </div>
          </div>
          <div className="card">
            <MdPerson />
            <div className="text">
              <Styledelements.Heading1>987</Styledelements.Heading1>
              <Styledelements.Heading3>total clients</Styledelements.Heading3>
            </div>
          </div>
          <div className="card">
            <CgGym />
            <div className="text">
              <Styledelements.Heading1>587</Styledelements.Heading1>
              <Styledelements.Heading3>gym equipment</Styledelements.Heading3>
            </div>
          </div>
          <div className="card">
            <GiCoffeeCup />
            <div className="text">
              <Styledelements.Heading1>748</Styledelements.Heading1>
              <Styledelements.Heading3>cup of coffee</Styledelements.Heading3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
