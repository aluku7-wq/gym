/** @format */

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { GymContext } from "../statemanager/Statemanager";
import { Container } from "./Cursor.styled";
import { cursorAnimation } from "../animation/Animation";

const Cursor = () => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  const globalstate = useContext(GymContext);
  const scaling = globalstate.cursorstate;
  const cursorVariant = cursorAnimation(largecircle, smallcircle, scaling);
  return (
    <Container>
      <motion.div
        variants={cursorVariant.large}
        animate="show"
        className="large_circle"></motion.div>
      <motion.div
        variants={cursorVariant.small}
        animate="show"
        className="small_circle"></motion.div>
    </Container>
  );
};

export default Cursor;
