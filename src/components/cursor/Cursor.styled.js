/** @format */

import styled from "styled-components";
export const Container = styled.div`
  .large_circle,
  .small_circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--secondary);
    position: fixed;
    pointer-events: none;
    transition: transform 0.1s;
    z-index: 2;
  }
  .small_circle {
    width: 16px;
    height: 16px;
    background-color: var(--primary);
  }
`;
