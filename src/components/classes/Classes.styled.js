/** @format */

import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 128px;
  .body {
    display: flex;
    padding: 128px 200px;
    gap: 64px;
    .text {
      display: flex;
      flex-direction: column;
      width: 40%;
      h1 {
        font-size: 40px;
        line-height: 48px;
        span {
          color: var(--secondary);
        }
      }
      p {
        margin-top: 32px;
      }
      button {
        margin-top: 40px;
      }
    }
    .classes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      gap: 32px;
      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 16px;
        img {
          width: 100%;
        }
        h3 {
          text-transform: capitalize;
        }
        .stars {
          display: flex;
          gap: 4px;
          justify-content: center;
          color: rgb(253, 214, 48);
        }
      }
    }
  }
  .underline {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5px;
    padding: 0 84px;

    .section1 {
      flex-basis: 2.5%;
      background-color: var(--secondary);
      height: 100%;
      border-radius: 5px;
    }
    .section2 {
      flex-basis: 90%;
      background: var(--fontlight);
      height: 2px;
    }
  }
`;
