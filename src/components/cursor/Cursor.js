/** @format */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./Cursor.styled";

const Cursor = ({ scaling }) => {
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

  return (
    <Container>
      <motion.div
        animate={{
          x: largecircle.x - 32,
          y: largecircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 }}></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: { type: "spring", mass: 2 },
        }}
        className="small_circle"></motion.div>
    </Container>
  );
};

export default Cursor;
