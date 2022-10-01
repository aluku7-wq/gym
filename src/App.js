/** @format */

import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import { Statemanager } from "./components/statemanager/Statemanager";
import Classes from "./components/classes/Classes";
import About from "./components/about/About";
import Schedule from "./components/schedule/Schedule";
import Video from "./components/video/Video";
import Trainers from "./components/trainers/Trainers";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Statemanager>
      <Cursor />
      <Hero />
      <Classes />
      <About />
      <Schedule />
      <Video />
      <Trainers />
      <Footer />
    </Statemanager>
  );
}

export default App;
