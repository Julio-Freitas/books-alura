import styled from "styled-components";

export const FieldBox = styled.div`
  display: flex;
  gap: 15px;

  div {
    flex: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  gap: 15px;

  caption {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #eb9b00;
    margin: 0;
    text-align: left;
  }
`;
