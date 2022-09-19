/** @format */

import { Container } from "./Header.styled";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import Logo from "../logo/Logo";

const Header = () => {
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
        <div className="menu">
          <BiMenu />
        </div>
      </div>
    </Container>
  );
};

export default Header;
