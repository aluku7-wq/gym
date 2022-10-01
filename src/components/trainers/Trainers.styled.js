/** @format */

import styled from "styled-components";
export const Container = styled.div`
  background: linear-gradient(to bottom, #fff, var(--overlay4));
  display: flex;
  flex-direction: column;
  padding: 64px 232px;
  gap: 40px;
  h1 {
    font-size: 40px;
    span {
      color: black;
      border-bottom: 4px solid var(--secondary);
    }
  }
  .cards_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .card {
      display: grid;
      grid-template-areas: "main";
      background: #ddc5cf;
      position: relative;
      img {
        grid-area: main;
        width: 100%;
        margin: auto;
        margin-top: 80px;
      }
      .name {
        grid-area: main;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        height: 100%;
        position: absolute;
        display: flex;
        color: #fff;
        flex-direction: column;
        align-items: center;

        p {
          font-size: 48px;
          margin-top: auto;
        }
        .name_container {
          background-color: var(--primary);

          text-transform: capitalize;
          font-size: 20px;
          text-align: center;
          width: 80%;
          padding: 12px 0;
          margin: auto;
          margin-bottom: -40px;
        }
      }
    }
  }
  .text {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    h1 {
      flex-basis: 50%;
      font-size: 32px;
      line-height: 56px;
    }
    .statistics {
      flex-basis: 40%;
      display: flex;
      justify-content: space-between;
      .section {
        display: flex;
        flex-direction: column;
        h1 {
          color: var(--secondary);
        }
        h3 {
          font-size: 18px;
          text-transform: capitalize;
          color: var(--fontgray);
        }
      }
    }
  }
`;
