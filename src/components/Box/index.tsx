import { DsCard } from "books-ds";
import { IBox } from "./types";
import * as S_ from "./styles";

export const Box = ({ title, children }: IBox) => {
  return (
    <S_.Container>
      <h2>{title}</h2>
      <DsCard>{children}</DsCard>
    </S_.Container>
  );
};
