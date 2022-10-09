/** @format */

import { Container } from "./Sidebar.styled";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GymContext } from "../statemanager/Statemanager";
import { MdClose, MdHome, MdInfo, MdCategory } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";

const Sidebar = () => {
  const globalstate = useContext(GymContext);
  const data = [
    { id: 1, icon: MdHome, link: "home" },
    { id: 2, icon: MdCategory, link: "classes" },
    { id: 3, icon: MdInfo, link: "about" },
    { id: 4, icon: AiFillSchedule, link: "schedule" },
    { id: 5, icon: TbYoga, link: "trainers" },
  ];
  const [colorindex, setcolorindex] = useState(0);
  return (
    <Container>
      <motion.div
        animate={{
          width: globalstate.sidebar ? "80vw" : 0,
          padding: globalstate.sidebar ? "40px" : 0,
          transition: { duration: 0.5 },
        }}
        className="main"
        key={"sidenavigation"}>
        <div className="header">
          <p onClick={() => globalstate.sidedipatch({ type: "SIDE" })}>
            <MdClose />
          </p>
        </div>
        <div className="body">
          {data.map((item, index) => {
            return (
              <div
                className="cards"
                key={index}
                style={{
                  background:
                    index === colorindex
                      ? "rgba(254,254,254,0.5)"
                      : "transparent",
                  color: index === colorindex ? "#674bb9" : "#fff",
                }}
                onClick={() => {
                  setcolorindex(index);
                  globalstate.sidedipatch({ type: "SIDE" });
                }}>
                <p>
                  <item.icon />
                </p>
                <p>{item.link}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Sidebar;
