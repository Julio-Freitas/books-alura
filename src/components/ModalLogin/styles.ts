import styled from "styled-components";

export const ContentModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  overflow: auto;

  figcaption {
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
  flex: 1.5;
  gap: 10px;

  h4 {
    font-weight: 600;
    font-size: 26px;
    line-height: 48px;
    color: #eb9b00;
    margin-top: -15px;
    text-align: left;
    padding: 0;
    display: inline-block;
  }

  div {
    gap: 5px;
  }
`;

export const ErrorPWD = styled.span<{ show?: boolean }>`
  font-size: 12px;
  color: #f55;
  font-weight: 600;
  transition: ease-in 0.3s;
  margin-top: -5px;
  margin-left: 10px;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;
