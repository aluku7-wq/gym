/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 56px 8vw;
  justify-content: space-between;
  align-items: baseline;

  .navitems {
    display: flex;
    color: var(--primary);
    font-size: 24px;
    align-items: baseline;
    gap: 1vw;
    .search {
      font-size: 20px;
      cursor: pointer;
    }
    .bag {
      display: flex;
      cursor: pointer;
      p {
        font-size: 10px;
        color: #fff;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary);
        border-radius: 50%;
        align-self: flex-start;
        margin-top: -8px;
        font-weight: 700;
      }
    }
    .menu {
      width: 40px;
      height: 40px;
      background-color: var(--secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 50%;
      cursor: pointer;
      p {
        display: flex;
        align-items: center;
      }
    }
  }
`;
