/** @format */

import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./locomotive-scroll.css";
import { useRef } from "react";
import { Statemanager } from "./components/statemanager/Statemanager";
import Classes from "./components/classes/Classes";
import About from "./components/about/About";
import Schedule from "./components/schedule/Schedule";
import Video from "./components/video/Video";

function App() {
  const containerRef = useRef();
  return (
    <Statemanager>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // tablets and mobile
          // smartphone: { smooth: true },
          // tablet: { smooth: true },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <Cursor />
          <Hero />
          <Classes />
          <About />
          <Schedule />
          <Video />
        </main>
      </LocomotiveScrollProvider>
    </Statemanager>
  );
}

export default App;
