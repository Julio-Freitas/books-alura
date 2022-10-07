import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #eb9b00;
    width: 100%;
    text-align: center;
    background-color: #fff;
    padding: 15px 0;
  }

  section {
    justify-content: space-around;
    align-items: center;
    background-color: #ebecee;
    padding: 40px 100px;
    gap: 15px;
    flex-wrap: wrap;
  }

  @media (max-width: 1228px) {
    section {
      flex-direction: column;
      justify-content: center;
      padding: 40px 25px;
    }
  }
`;
