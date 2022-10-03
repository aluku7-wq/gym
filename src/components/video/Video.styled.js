/** @format */

import styled from "styled-components";
export const Container = styled.div`
  padding: 144px 0;
  .video {
    display: grid;
    justify-content: center;
    padding: 0 5vw;
    grid-template-areas: "video";

    video {
      grid-area: video;
      width: 90%;
      margin: auto;
    }
    p {
      grid-area: video;
      align-self: center;
      justify-self: center;
      color: var(--secondary);
      background-color: rgba(254, 254, 254, 0.8);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 24px;
    }
  }

  .burner {
    background-color: var(--primary);
    margin: 144px 5vw;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    img {
      width: 64px;
    }
  }
  @media (max-width: 800px) {
    padding: 72px 0;
    .video {
      padding: 0;
      video {
        width: 100%;
      }
    }
    .burner {
      margin: 72px 5vw;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      img {
        width: 80px;
      }
    }
  }
`;
