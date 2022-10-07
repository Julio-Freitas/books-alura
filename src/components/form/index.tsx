import { DsButton, DsField } from "books-ds";
import { useState } from "react";
import * as S_ from "./styles";

interface iForm {
  title: string;
  textButton: string;
}

const fiedls = [
  {
    id: "name",
    value: "value",
    onchange: (e: string) => console.log(e),
  },
];

export const Form = ({ title, textButton }: iForm) => {
    const [_fields, _setFields] = useState<typeof fiedls[0]>()

    return (

        <S_.Form>
          <caption>{title}</caption>
          {fiedls.map((field) => (
            <DsField
              key={field.id}
              text={field.value}
              onChangeValue={field.onchange}
              label="Nome"
              placeholder="Seu nome"
            />
          ))}

          <DsButton type="submit" text={textButton} />
        </S_.Form>
      )
};
