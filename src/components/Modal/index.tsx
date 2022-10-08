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

  const checkPassword = useMemo(() => {
    setErrorForm(
      password.trim() !== confirmPassword.trim()
        ? "Senha ainda são diferentes"
        : ""
    );
    return password.trim() !== confirmPassword.trim();
  }, [password, confirmPassword]);

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
      return setErrorForm("Verique os campo nome, email e senha.");

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
    onClose();
  };

  return (
    <DsModal status={status} onClose={onClose}>
      <S_.ContentModal>
        <figcaption>
          <img src={imgRegister} alt={title} />
        </figcaption>

        <S_.Form data-testid="form-register">
          <caption>{title}</caption>
          <DsField
            text={name}
            onChangeValue={setName}
            label="Nome"
            placeholder="Seu nome"
            name="nome"
            value={name}
          />
          <DsField
            text={email}
            onChangeValue={setEmal}
            label="Email"
            placeholder="seuemail@email.com"
            name="email"
            value={email}
          />
          <DsField
            text={address}
            onChangeValue={setAddress}
            label="Endereço"
            placeholder="Sua rua e número"
            name="endereco"
            value={address}
          />
          <S_.FieldBox>
            <DsField
              text={addressLocale}
              value={addressLocale}
              onChangeValue={setAddressLocale}
              label="Complemento"
              placeholder="Apto/casa, bloco, referência"
              name="complemento"
            />
            <DsField
              text={zip}
              value={zip}
              onChangeValue={setZip}
              label="CEP"
              placeholder="Apto/casa e bloco"
              name="zip"
            />
          </S_.FieldBox>
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
          <DsField
            type="password"
            text={confirmPassword}
            value={confirmPassword}
            onChangeValue={setConfirmPassword}
            label="Confirmar senha"
            placeholder="************"
            data-testid="confirmPassword"
            name="confirmPassword"
          />

          <S_.ErrorPWD
            data-testid="erro-password"
            show={(errorForm && errorForm?.length > 0) || checkPassword}
          >
            {errorForm}
          </S_.ErrorPWD>

          <DsButton type="button" text="Cadastrar" onClick={_handleSubmit} />
        </S_.Form>
      </S_.ContentModal>
    </DsModal>
  );
};
