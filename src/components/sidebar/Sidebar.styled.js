/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin: 0;

  .main {
    display: flex;
    min-height: 100vh;
    background-color: var(--secondary);
    width: 100vw;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-weight: 700;
    .header {
      display: flex;
      justify-content: right;
      width: 100%;
      font-size: 32px;
    }
    .body {
      margin-top: 20vh;
      display: flex;
      flex-direction: column;
      gap: 5vh;
      width: 100%;
    }
    .cards {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 8px;
      width: 50%;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 760px) {
    .main {
      .body {
        .cards {
          width: 100%;
        }
      }
    }
  }
`;
