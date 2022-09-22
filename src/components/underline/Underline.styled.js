/** @format */

import styled from "styled-components";
export const Container = styled.div`
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
`;
