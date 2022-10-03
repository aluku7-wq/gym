/** @format */

import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 48px;
  .body {
    display: flex;
    padding: 128px 10vw;
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
        display: block;
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
    button {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    .body {
      padding: 56px 10vw;
      flex-direction: column;

      .text {
        width: 80%;
        p {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .body {
      padding: 64px 5vw;

      .text {
        width: 100%;
        h1 {
          font-size: 30px;
          line-height: 40px;
        }
        button {
          width: 100%;
        }
      }
      .classes {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
