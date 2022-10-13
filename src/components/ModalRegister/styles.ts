import styled from "styled-components";

export const ContentModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  overflow: auto;

  figcaption {
    width: 250px;
    max-width: 445px;
    display: inline-flex;
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
  gap: 10px;

  h4 {
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    color: #eb9b00;
    margin-top: -10px;
    text-align: left;
    padding: 0;
    display: inline-block;
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
