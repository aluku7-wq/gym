/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
  background: linear-gradient(to bottom, white, #f0eeff);

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 15vw;

    h1 {
      font-size: 48px;
      font-family: var(--roboto);
      font-weight: 700;
      span {
        color: black;
        display: inline-block;
        border-bottom: 4px solid var(--secondary);
      }
    }
    img {
      width: 200px;
    }
  }
  .body {
    display: flex;
    gap: 48px;
    align-items: flex-start;
    padding: 0 15vw;
    .burner {
      display: grid;
      align-items: flex-start;
      grid-template-areas: "all";
      .image {
        display: flex;
        grid-area: all;
        span {
          background-color: var(--secondary);
          height: 200px;
          width: 5px;
          margin-top: 40px;
        }

        img {
          width: 30vw;
        }
      }

      .budge {
        grid-area: all;
        height: 128px;
        width: 128px;
        background-color: var(--primary);
        align-self: flex-end;
        justify-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        gap: 8px;
        p {
          font-weight: 500;
          text-transform: capitalize;
          font-size: 14px;
        }
      }
    }
    .text {
      h3 {
        font-size: 24px;
        color: var(--secondary);

        span {
          display: inline-block;
          width: 40px;
          border-bottom: 4px solid var(--secondary);
          margin-right: 4px;
        }
      }
      h1 {
        font-size: 32px;
      }
      p {
        margin-bottom: 16px;
      }
      button {
        margin-top: 16px;
      }
    }
  }
  .bottom {
    background: linear-gradient(to bottom, transparent 50%, #3e3038 50%);
    padding: 80px 0;
    .burner {
      background-color: var(--primary);
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      padding: 40px 8vw;
      width: 90%;
      margin: auto;
      .card {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 32px;
        color: #fff;

        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          h1 {
            font-size: 32px;
            line-height: 32px;
          }
          h3 {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .body {
      flex-direction: column;
      .burner {
        .image {
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .bottom {
      .burner {
        flex-direction: column;
        gap: 10vh;
        align-items: center;
      }
    }
  }
  @media (max-width: 700px) {
    .top {
      padding: 0 10vw;
      img {
        display: none;
      }
    }
    .body {
      padding: 0 5vw;

      h1 {
        margin-top: 24px;
        font: 32px;
        line-height: 40px;
        margin-bottom: 24px;
      }
      button {
        width: 100%;
      }
    }
  }
`;
