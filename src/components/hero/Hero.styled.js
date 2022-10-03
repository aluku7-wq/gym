/** @format */

import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(var(--overlay4), var(--overlay4)),
    url("/images/background/bg8.jpg");
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 110vh;

  .body {
    background-size: cover;
    display: flex;
    justify-content: center;
    gap: 10vw;
    padding: 0 20vw;
    padding-top: 16vh;

    .image {
      max-height: 100vh;
      img {
        width: 100%;
      }
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
  @media screen and (max-width: 1100px) {
    background: linear-gradient(var(--overlay4), var(--overlay4)),
      url("/images/background/bg9.jpg");
    .body {
      padding-top: 16vh;
      .image {
        display: none;
      }
    }
  }
  @media screen and (max-width: 760px) {
    background-position: center;
    .body {
      padding: 0 10vw;
      padding-top: 10vh;
      .text {
        h1 {
          font-size: 40px;
          line-height: 48px;
        }
        button {
          width: 100%;
        }
      }
    }
  }
`;
