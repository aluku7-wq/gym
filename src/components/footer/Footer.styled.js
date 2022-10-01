/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    background: url("./images/background/footer.jpg");
    background-size: 100% 100%;
    margin-bottom: 100px;

    .overlay {
      padding: 64px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(254, 254, 254, 0.8);
      h3 {
        text-transform: uppercase;
        font-size: 24px;
        color: var(--primary);
      }
      h1 {
        font-size: 32px;
        text-transform: capitalize;
        margin-bottom: 40px;
      }
      .form {
        background-color: rgba(254, 254, 254, 0.9);
        border: 2px solid var(--overlay);
        border-radius: 4px;
        padding: 2px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        padding-left: 32px;
        input {
          border: none;
          outline: none;
          font-size: 18px;
          width: fit-content;
          flex-basis: 70%;
        }
        input::placeholder {
          color: var(--fontgray);
          font-weight: 500;
          text-transform: capitalize;
        }
        button {
          border-radius: 4px;
          padding: 24px 32px;
        }
      }
    }
    .icons {
      margin-top: 32px;
      display: flex;
      gap: 32px;
      .icon {
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--secondary);
      }
    }
  }
`;
