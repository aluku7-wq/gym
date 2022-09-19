/** @format */

import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
     :root { 
        /* colors */
        --primary: #674bb9;
        --secondary: #d7327a;
        --info: #2f80ed;
        --success: #27ae60;
        --warning: #e2b93b;
        --error: #eb5757;
        --overlay: rgba(170,153,219,1);
        --overlay2: rgba(170,153,219,0.3);
        --overlay3: rgb(239,236,255);
        --overlay4: rgba(239,236,255,0.9);
        --fontlight: #8b8b93;
        /* font-family */
        --oswald: 'Oswald', sans-serif;
        --roboto: 'Roboto', sans-serif;
    }
      `;
export const Styledelements = {
  // buttons
  Button: styled.button`
    background-color: var(--primary);
    padding: 16px 32px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 700;
    font-family: var(--roboto);
    font-size: 16px;
    border-radius: 24px;
    cursor: pointer;
  `,
  // headings
  Heading1: styled.h1`
    font-family: var(--oswald);
    text-transform: capitalize;
    font-weight: 800;
    font-size: 64px;
    line-height: 32px;
    span {
      color: var(--primary);
    }
  `,
};
