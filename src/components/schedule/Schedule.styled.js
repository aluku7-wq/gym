/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 128px 0;
  h1 {
    margin-left: 256px;
    font-weight: 700;
    span {
      display: inline-block;
      border-bottom: 4px solid var(--secondary);
      color: black;
    }
  }
  .body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 64px;
    padding: 64px 220px;

    .card {
      display: flex;
      flex-direction: column;
      .text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px 0;
        align-items: center;
        background-color: var(--overlay2);
        p {
          font-weight: 700;
          font-size: 18px;
          color: black;
        }
        p:nth-of-type(1) {
          color: var(--primary);
        }
        h3 {
          font-weight: 700;
          font-size: 22px;
          text-transform: capitalize;
        }
      }
      img {
        width: 100%;
      }
    }
    .card:nth-of-type(odd) {
      flex-direction: column-reverse;
    }
  }
`;
