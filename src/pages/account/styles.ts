import styled from "styled-components";

export const MyAccountContainer = styled.div`
  padding: 141px 125px;
  display: flex;
  gap: 76px;
`;
export const Aside = styled.aside`
  width: 160px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Li = styled.li<{ selected?: boolean }>`
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 1px solid #0e3e61;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.5s;
  cursor: pointer;

  :first-child {
    padding-top: 0rem;
  }

  ${(props) =>
    props.selected &&
    `
        font-weight: 600;
        border-bottom: 2px solid #0e3e61;
  `}
  :hover {
    font-weight: 600;
    border-bottom: 2px solid #0e3e61;
  }
`;

export const Content = styled.section`
  flex: 1;

  h4 {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const LiOrder = styled.li`
  padding: 15px 0;
  font-size: 16px;
  border-bottom: 1px solid #0e3e61;
  width: 100%;
  p {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 15px;
    gap: 5px;
    font-weight: 600;
    justify-content: space-between;

    span {
      font-weight: normal;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    position: relative;
    text-align: center;
    left: calc(100%);
    transform: translateX(-100%);
    width: auto;
    margin-top: 5px;
    padding: 5px 10px;
    font-size: 14px;
  }
`;
