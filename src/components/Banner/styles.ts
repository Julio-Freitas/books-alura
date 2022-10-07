import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 84px 0;
  background: linear-gradient(97.54deg, #002f52 50.49%, #326589 165.37%);
`;
export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  position: relative;

  button {
    margin-top: 15px;
    border-radius: 8px;
    background-color: transparent;
  }
`;

export const Tilte = styled.h2`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
`;

export const Description = styled.p`
  font-family: sans-serif;
  color: #ffffff;
  margin: 0;
`;

type ImageProps = { left?: number; right?: number; bgImage?: string };

export const Image = styled.div<ImageProps>`
  position: absolute;
  z-index: 1;
  inset: 0;
  display: flex;
  font-size: 20px;
  color: #fff;
  ${({ bgImage }) =>
    bgImage &&
    `
    background-image: url("${bgImage}");
    background-position: left;
    background-repeat: no-repeat;
  `}

  opacity: 0.1;
  filter: brightness(30%);
  width: 25%;
  left: ${({ left }) => `calc(${left}% - 25%)` ?? 0};
  right: ${({ right }) => `${right}%` ?? 0};
`;
