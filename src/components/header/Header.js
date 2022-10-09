/** @format */

import { Container } from "./Header.styled";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import Logo from "../logo/Logo";
import { useContext } from "react";
import { GymContext } from "../statemanager/Statemanager";
import { motion } from "framer-motion";
import { headerAnimation } from "../animation/Animation";

const Header = () => {
  const globalstate = useContext(GymContext);
  // const dispatch = globalstate.cursorDispatch;

  return (
    <Container>
      <div className="logo">
        <Logo />
      </div>
      <div className="navitems">
        <FiSearch className="search" />
        <div className="bag">
          <AiTwotoneShopping />
          <p>3</p>
        </div>
        <MdPerson />
        <motion.div
          variants={headerAnimation().menu}
          initial="hidden"
          animate="show"
          exit="hide"
          key={"menubar"}
          layoutId="side"
          onClick={() => globalstate.sidedipatch({ type: "SIDE" })}
          className="menu">
          <p>
            <BiMenu />
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Header;
