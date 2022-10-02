/** @format */

import React from "react";
import { Container } from "./Footer.styled";
import { Styledelements } from "../globalsyles/Globalstyles.styled";
import Logo from "../logo/Logo";
import {
  RiSendPlaneFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiTimeLine,
} from "react-icons/ri";
import { MdLocationOn, MdCall, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <div className="top">
        <div className="overlay">
          <Styledelements.Heading3>join the community</Styledelements.Heading3>
          <Styledelements.Heading1>
            subscribe our newsletter
          </Styledelements.Heading1>
          <div className="form">
            <input type="text" placeholder="enter your email address" />
            <Styledelements.Button>
              subscribe now <RiSendPlaneFill />
            </Styledelements.Button>
          </div>
          <div className="icons">
            <div className="icon">
              <RiFacebookFill />
            </div>
            <div className="icon">
              <RiTwitterFill />
            </div>
            <div className="icon">
              <RiLinkedinFill />
            </div>
            <div className="icon">
              <RiYoutubeFill />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="body">
          <div className="section">
            <Logo />
            <p>
              looking to join a fitness class but have no idea where to begin
              looking? fithub is here to help
            </p>
            <div className="schedule">
              <div className="icon">
                <RiTimeLine />
              </div>
              <div className="text">
                <Styledelements.Heading3>Moday-Friday</Styledelements.Heading3>
                <p>7.00Am-10.00PM</p>
                <Styledelements.Heading3>Moday-Friday</Styledelements.Heading3>
                <p>7.00Am-10.00PM</p>
              </div>
            </div>
          </div>
          <div className="section">
            <Styledelements.Heading3>
              <span>our li</span>nks
            </Styledelements.Heading3>
            <p>home </p>
            <p>about us </p>
            <p>classes </p>
            <p>blog </p>
            <p>contact us </p>
          </div>
          <div className="section">
            <Styledelements.Heading3>
              <span>conta</span>ct us
            </Styledelements.Heading3>
            <div className="contacts">
              <div className="icon">
                <MdLocationOn />
              </div>
              <p>age house oginga street,Nakuru,kenya</p>
            </div>
            <div className="contacts">
              <div className="icon">
                <MdCall />
              </div>
              <p>+25469301113</p>
            </div>
            <div className="contacts">
              <div className="icon">
                <MdMail />
              </div>
              <p>foreveraluku@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&#169; 2022 age concepts. all right reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
