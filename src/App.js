/** @format */

import Hero from "./components/hero/Hero";
import { GlobalStyle } from "./components/globalsyles/Globalstyles.styled";
import Cursor from "./components/cursor/Cursor";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./locomotive-scroll.css";
import { useRef } from "react";

function App() {
  const containerRef = useRef();
  return (
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
        <GlobalStyle />
        <Cursor />
        <Hero />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
