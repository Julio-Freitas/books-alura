import styled from "styled-components";
import { DsField } from "books-ds";
export const ContentModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 65px;

  figcaption {
    flex: 1;
    max-width: 445px;
  }

  img {
    max-width: 100%;
    flex: 1;
  }
`;

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

export const ErrorPWD = styled.span<{ show?: boolean }>`
  font-size: 12px;
  color: #f55;
  font-weight: 600;
  transition: ease-in 0.3s;
  margin-top: -10px;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;
