/** @format */

import { Container } from "./Trainers.styled";
import { Styledelements } from "../globalsyles/Globalstyles.styled";
import { RiAddCircleFill } from "react-icons/ri";
import { useState } from "react";
const Trainers = () => {
  const data = [
    { id: 1, name: "jeniffer winget", image: "trainer1.png" },
    { id: 2, name: "aluku winget", image: "trainer2.png" },
    { id: 3, name: "xenia winget", image: "trainer3.png" },
  ];
  const [cardhoverindex, setcardhoverindex] = useState("");
  return (
    <Container>
      <Styledelements.Heading1>
        <span>Tra</span>iners
      </Styledelements.Heading1>
      <div className="cards_container">
        {data.map((trainer, index) => {
          return (
            <div
              className="card"
              key={index}
              onMouseEnter={() => setcardhoverindex(trainer.id)}
              onMouseLeave={() => setcardhoverindex("")}>
              <img src={`./images/background/${trainer.image}`} alt="" />
              {cardhoverindex === trainer.id ? (
                <div className="name">
                  <p>
                    <RiAddCircleFill />
                  </p>
                  <div className="name_container">
                    <Styledelements.Heading3>
                      {trainer.name}
                    </Styledelements.Heading3>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="text">
        <Styledelements.Heading1>
          meet our weekly top trainers from world wide
        </Styledelements.Heading1>
        <div className="statistics">
          <div className="section">
            <Styledelements.Heading1>30 k</Styledelements.Heading1>
            <Styledelements.Heading3>total trainer</Styledelements.Heading3>
          </div>
          <div className="section">
            <Styledelements.Heading1>75 k</Styledelements.Heading1>
            <Styledelements.Heading3>total members</Styledelements.Heading3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trainers;
