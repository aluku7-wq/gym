/** @format */

import { Container } from "./Video.styled";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Underline from "../underline/Underline";

const Video = () => {
  const videoRef = useRef();
  const [playcontrol, setplaycontrol] = useState(false);
  useEffect(() => {
    if (playcontrol) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playcontrol]);
  const burners = ["burner1.png", "burner2.png", "burner3.png", "burner4.png"];

  return (
    <Container data-scroll-section>
      <div className="video">
        <video
          // width="900"
          // height="240"
          ref={videoRef}
          onClick={() => {
            setplaycontrol((action) => !action);
          }}
          // controls
        >
          <source src="/videos/video.mp4" />
        </video>
        {!playcontrol && (
          <p>
            <FaPlay />
          </p>
        )}
      </div>

      <div className="burner">
        {burners.map((item, index) => {
          return <img src={`./images/background/${item}`} alt="" key={index} />;
        })}
      </div>
      <Underline />
    </Container>
  );
};

export default Video;
