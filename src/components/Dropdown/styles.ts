import styled from "styled-components";
import { ItemType } from "./types";

export const WrapperUl = styled.ul`
  position: absolute;
  top: 100%;
  background-color: #fff;
  list-style: none;

  flex-direction: column;
  gap: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: none;
`;

export const WrapperLi = styled.li<Partial<ItemType>>`
  padding: 24px;
  cursor: pointer;
  background-clip: text;
  color: 002F52;
  font-size: 16px;
  transition: all 0.5s;
  :hover,
  :active {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    color: #fff;
  }
  ${(props) =>
    props.selected &&
    `
        color: #fff;
        background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    `}
`;

export const Container = styled.div`
  position: relative;
  font-family: sans-serif;

  label {
    text-decoration: none;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    transition: all 0.3s;
    align-items: center;
    display: inline-flex;
    gap: 5px;
    padding: 10px;
    cursor: pointer;
    :hover {
      background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
      color: #fff;
    }
  }

  :hover,
  :focus {
    ${WrapperUl} {
      display: flex;
      z-index: 100;
    }
  }

  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    label {
      color: #fff;
    }
  }
`;
