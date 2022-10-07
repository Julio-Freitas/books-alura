import { DsButton, DsField, DsModal } from "books-ds";
import { IModal } from "./types";
import imgRegister from "../../assets/login-amico-register.svg";

import * as S_ from "./styles";
import { Form } from "../form";
import { useMemo, useState } from "react";

export const Modal = ({ status, onClose, title, onSubmit }: IModal) => {
  const [name, setName] = useState("");
  const [email, setEmal] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addressLocale, setAddressLocale] = useState("");
  const [errorForm, setErrorForm] = useState<string | null>("");

  const checkPassword = useMemo(
    () => password.trim() !== confirmPassword.trim(),
    [password, confirmPassword]
  );

  const _handleSubmit = () => {
    const data = {
      name,
      email,
      address,
      zip,
      password,
      confirmPassword,
      addressLocale,
    };

    if ((checkPassword && !name) || !email)
      return setErrorForm("Verique os campo nome, email e senha..");

    onSubmit(data);
    clearTheData();
  };

  const clearTheData = () => {
    setName("");
    setEmal("");
    setAddress("");
    setZip("");
    setPassword("");
    setConfirmPassword("");
    setAddressLocale("");
    setErrorForm("");
    setErrorForm("");
    onClose()
  };

  return (
    <DsModal status={status} onClose={onClose}>
      <S_.ContentModal>
        <figcaption>
          <img src={imgRegister} alt={title} />
        </figcaption>

        <S_.Form>
          <caption>{title}</caption>
          <DsField
            text={name}
            onChangeValue={setName}
            label="Nome"
            placeholder="Seu nome"
          />
          <DsField
            text={email}
            onChangeValue={setEmal}
            label="Email"
            placeholder="seuemail@email.com"
          />
          <DsField
            text={address}
            onChangeValue={setAddress}
            label="Endereço"
            placeholder="Sua rua e número"
          />
          <S_.FieldBox>
            <DsField
              text={addressLocale}
              onChangeValue={setAddressLocale}
              label="Complemento"
              placeholder="Apto/casa, bloco, referência"
              name="address"
            />
            <DsField
              text={zip}
              onChangeValue={setZip}
              label="CEP"
              placeholder="Apto/casa e bloco"
              name="address"
            />
          </S_.FieldBox>
          <DsField
            type="password"
            text={password}
            onChangeValue={setPassword}
            label="Senha"
            placeholder="************"
          />
          <DsField
            type="password"
            text={confirmPassword}
            onChangeValue={setConfirmPassword}
            label="Confirmar senha"
            placeholder="************"
          />

          <S_.ErrorPWD show={checkPassword}>
            Senha ainda são diferentes
          </S_.ErrorPWD>

          <S_.ErrorPWD show={(errorForm && errorForm?.length > 0) || false}>
            {errorForm}
          </S_.ErrorPWD>

          <DsButton type="button" text="Cadastrar" onClick={_handleSubmit} />
        </S_.Form>
      </S_.ContentModal>
    </DsModal>
  );
};
