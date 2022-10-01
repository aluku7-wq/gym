/** @format */

import { Styledelements } from "../globalsyles/Globalstyles.styled";
import { Container } from "./Classes.styled";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { GymContext } from "../statemanager/Statemanager";
import Underline from "../underline/Underline";

const Classes = () => {
  const globalstate = useContext(GymContext);
  const dispatch = globalstate.cursorDispatch;
  return (
    <Container>
      <div className="body">
        <div className="text">
          <Styledelements.Heading1>
            Fitness <span>classes</span> for
          </Styledelements.Heading1>
          <Styledelements.Heading1>every goal</Styledelements.Heading1>
          <Styledelements.Paragraph>
            gym and fitness has a growing team 600+ awesome superstars and we
            awe succes to each and everyone of them! register for free trial!
          </Styledelements.Paragraph>
          <Styledelements.Button
            onMouseEnter={() => dispatch({ type: "SHRINK" })}
            onMouseLeave={() => dispatch({ type: "EXPAND" })}>
            free trial
          </Styledelements.Button>
        </div>
        <div className="classes">
          <div className="card">
            <img src="./images/background/classes2.jpg" alt="" />
            <Styledelements.Heading3>gym classes</Styledelements.Heading3>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="card">
            <img src="./images/background/classes1.jpg" alt="" />
            <Styledelements.Heading3>fitness tips</Styledelements.Heading3>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="card">
            <img src="./images/background/classes3.jpg" alt="" />
            <Styledelements.Heading3>game classes</Styledelements.Heading3>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
      <Underline />
    </Container>
  );
};

export default Classes;
