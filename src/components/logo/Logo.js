/** @format */

import styled from "styled-components";

const Logo = () => {
  const Container = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    img {
      height: 36px;
    }
    h4 {
      margin-left: -24px;
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
      <img src="/images/logo/logo.png" alt="" />
      <h4>FITHUB</h4>
      <span></span>
    </Container>
  );
};

export default Logo;
