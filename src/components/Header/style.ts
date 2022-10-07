import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(97.54deg, #fff 35.49%, #fffd 165.37%);
  box-shadow: 1px 0px 5px 1px #326589;
  padding: 30px 80px 20px;
  flex-wrap: wrap;

  @media (max-width: 1202px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 664px) {
    padding: 10px 60px 0px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  width: 264px;
  @media (max-width: 664px) {
    width: auto;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: inline-flex;
  gap: 42px;

  @media (max-width: 664px) {
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: center;
  }
`;

export const Nav_Info = styled.nav`
  display: inline-flex;
  gap: 42px;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: center;
  }
`;

export const Link = styled(LinkRouter)`
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
  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    color: #fff;
  }
`;
