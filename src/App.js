/** @format */
import "./App.css";
import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import Classes from "./components/classes/Classes";
import About from "./components/about/About";
import Schedule from "./components/schedule/Schedule";
import Video from "./components/video/Video";
import Trainers from "./components/trainers/Trainers";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { GymContext } from "./components/statemanager/Statemanager";
import Sidebar from "./components/sidebar/Sidebar";
import { motion } from "framer-motion";
function App() {
  const globalstate = useContext(GymContext);
  return (
    <div
      className="App"
      style={{
        height: globalstate.sidebar ? "100vh" : null,
        overflow: globalstate.sidebar ? "hidden" : null,
        background: globalstate.sidebar ? "#d7327a" : null,
      }}>
      <motion.div
        className="main"
        key="main"
        animate={{
          marginLeft: globalstate.sidebar ? "-100vw" : 0,
          marginTop: globalstate.sidebar ? "20vh" : 0,
          borderRadius: globalstate.sidebar ? "24px" : 0,
          transition: { duration: 0.5 },
        }}>
        <Cursor />
        <Hero />
        <Classes />
        <About />
        <Schedule />
        <Video />
        <Trainers />
        <Footer />
      </motion.div>
      <Sidebar />
    </div>
  );
}

export default App;
