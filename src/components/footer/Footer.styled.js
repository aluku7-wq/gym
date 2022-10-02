/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    background: url("./images/background/footer.jpg");
    background-size: 100% 100%;

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
  .bottom {
    padding: 64px 200px;
    background: linear-gradient(to bottom, #fff, var(--overlay2));
    .body {
      display: flex;
      .section {
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        .schedule {
          display: flex;
          gap: 8px;
          margin-top: 24px;
          .icon {
            color: var(--secondary);
            font-size: 32px;
          }
          .text {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
        }
        h3 {
          text-transform: capitalize;
          span {
            border-bottom: 4px solid var(--secondary);
          }
        }
        p {
          color: var(--fontgray);
          font-size: 14px;
          font-weight: 500;
          max-width: 90%;
        }
        .contacts {
          display: flex;
          gap: 8px;

          .icon {
            width: 30px;
            height: 30px;
            background-color: var(--secondary);
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
          }
          p {
            max-width: 200px;
          }
        }
      }
      .section:nth-of-type(1) {
        p {
          max-width: 80%;
        }
        h3 {
          font-size: 16px;
          color: var(--fontgray);
        }
      }
      .section:nth-of-type(2),
      .section:nth-of-type(3) {
        flex-basis: 30%;

        h3 {
          margin-bottom: 8px;
        }
      }
      .section:nth-of-type(3) {
        gap: 16px;
      }
    }
    .copyright {
      display: flex;
      justify-content: center;
      color: var(--fontgray);
      font-size: 14px;
      font-weight: 500;
      margin-top: 40px;
      font-weight: 700;
    }
  }
`;
