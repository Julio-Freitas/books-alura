import styled from "styled-components";

export const WrapperImg = styled.div`
  gap: 22px;
  flex: .5;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    border-radius: 3px;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    flex: 0.3 0 180px;
  }

  div:nth-child(1n) {
    background-color: blue;
    max-width: 200px;
    height: 253px;
  }

  div:nth-child(2n) {
    background-color: yellow;
    max-width: 253px;
    height: 370px;
  }

  div:nth-child(3n) {
    background-color: gray;
    max-width: 200px;
    height: 253px;
  }

  @media (max-width: 1228px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    div:nth-child(1n),
    div:nth-child(2n),
    div:nth-child(3n) {
      flex: auto;
      max-width: 100%;
      width: 253px;
      height: 370px;
    }
  }
`;

export const BoxContents = styled.div`
  max-width: 400px;
  background-color: #fff;
  align-self: flex-start;
  flex: 1;
  height: auto;
  padding: 48px 32px 48px;
  display: inline-block;
  gap: 16px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-left: 5px;
    }
  }

  header h3 {
    font-size: 32px;
    line-height: 48px;
    color: #eb9b00;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    span {
      display: block;
    }
    label {
      font-weight: 700;
      font-size: 28px;
      line-height: 54px;
      color: #002f52;
    }
  }

  @media (max-width: 1228px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 528px) {

    header h3 {
      font-size: 24px;
    }

    footer {
      flex-direction: column;
      align-items: baseline;

      label {
        font-size: 24px;
      }
    }
  }
`;

export const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h4 {
    color: #002f52;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    max-width: 270px;

    color: rgba(0, 0, 0, 0.85);
  }
  span {
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
  }
`;

export const BoxTags = styled.div`
  padding: 84px 407px;
  background: linear-gradient(97.54deg, #002f52 50.49%, #326589 165.37%);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  h4 {
    font-weight: 100;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    color: #ffffff;
  }

  @media (max-width: 1228px) {
    width: 100%;
    padding: 84px 70px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 70px;
  }
`;
