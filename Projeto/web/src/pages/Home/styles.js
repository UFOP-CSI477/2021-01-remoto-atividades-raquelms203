import styled from "styled-components";
import { darken } from "polished";
export const ProductList = styled.ul`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    justify-content: center;
    align-content: center;
    width: 100%;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      align-self: flex-start;
      margin: 5px 0px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }

      &:hover {
        background: ${darken(0.03, "#7159c1")};
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
