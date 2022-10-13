import { DsButton, DsField, DsModal } from "books-ds";
import { IModal } from "./types";
import imgRegister from "../../assets/login-amico-register.svg";

import * as S_ from "./styles";
import { useState } from "react";
import { IUserLogin } from "../../service/login/types";
import { usePersistToken } from "../../hooks/useAuth";

export const ModalLogin = ({
  status,
  onClose,
  title,
  onSubmit,
}: IModal<IUserLogin>) => {
  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");
  const _handleSubmit = async () => {
    const data = {
      email,
      password,
    };

    const {token, status} = await onSubmit(data);
    if (status) {
      clearTheData();
    }
  };

  const clearTheData = () => {
    setEmal("");
    setPassword("");
    onClose();
  };

  return (
    <DsModal status={status} onClose={onClose} heightScreen={400}>
      <S_.ContentModal>
        <figcaption>
          <img src={imgRegister} alt={title} />
        </figcaption>

        <S_.Form data-testid="form-login">
          <h4>{title}</h4>
          <DsField
            text={email}
            onChangeValue={setEmal}
            label="Email"
            placeholder="seuemail@email.com"
            name="email"
            value={email}
            required
            type="email"
          />

          <DsField
            type="password"
            text={password}
            value={password}
            onChangeValue={setPassword}
            label="Senha"
            placeholder="************"
            name="password"
            data-testid="password"
          />

          <DsButton type="button" text="Entrar" onClick={_handleSubmit} />
        </S_.Form>
      </S_.ContentModal>
    </DsModal>
  );
};
