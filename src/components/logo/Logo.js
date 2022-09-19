/** @format */

import styled from "styled-components";

const Logo = () => {
  const Container = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    img {
      filter: invert(30%) sepia(34%) saturate(3714%) hue-rotate(307deg)
        brightness(90%) contrast(93%);
      height: 40px;
    }
    p {
      font-family: var(--oswald);
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 2px;
      color: var(--primary);
    }
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--secondary);
    }
  `;
  return (
    <Container>
      <img src="/images/logo/logo.svg" alt="" />
      <p>FITHUB</p>
      <span></span>
    </Container>
  );
};

export default Logo;
