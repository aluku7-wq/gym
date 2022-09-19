/** @format */

import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(var(--overlay4), var(--overlay4)),
    url("/images/background/bg8.jpg");
  display: flex;
  flex-direction: column;

  .body {
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    gap: 10vw;
    img {
      width: 20vw;
      flex-basis: 20%;
      height: fit-content;
    }
    .text {
      display: flex;
      flex-direction: column;
    }
    p {
      max-width: 420px;
      margin-top: 32px;
    }
    button {
      margin-top: 56px;
    }
    .sliders {
      display: flex;
      gap: 48px;
      justify-content: right;
      .slider {
        height: 48px;
        width: 48px;
        border: 2px solid var(--overlay);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--overlay2);
        cursor: pointer;
      }
    }
  }
`;