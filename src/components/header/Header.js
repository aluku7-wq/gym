/** @format */

import { Container } from "./Header.styled";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import Logo from "../logo/Logo";
import { useContext } from "react";
import { GymContext } from "../statemanager/Statemanager";

const Header = () => {
  const globalstate = useContext(GymContext);
  const dispatch = globalstate.cursorDispatch;
  return (
    <Container>
      <div className="logo">
        <Logo />
      </div>
      <div className="navitems">
        <FiSearch
          className="search"
          onMouseEnter={() => dispatch({ type: "SHRINK" })}
          onMouseLeave={() => dispatch({ type: "EXPAND" })}
        />
        <div
          className="bag"
          onMouseEnter={() => dispatch({ type: "SHRINK" })}
          onMouseLeave={() => dispatch({ type: "EXPAND" })}>
          <AiTwotoneShopping />
          <p>3</p>
        </div>
        <MdPerson
          onMouseEnter={() => dispatch({ type: "SHRINK" })}
          onMouseLeave={() => dispatch({ type: "EXPAND" })}
        />
        <div
          className="menu"
          onMouseEnter={() => dispatch({ type: "SHRINK" })}
          onMouseLeave={() => dispatch({ type: "EXPAND" })}>
          <BiMenu />
        </div>
      </div>
    </Container>
  );
};

export default Header;
