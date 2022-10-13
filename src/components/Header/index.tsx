import { useEffect, useState } from "react";
import { IoMdLogIn, IoMdPerson, IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { usePersistToken } from "../../hooks/useAuth";
import { loginUser } from "../../service/login";
import { IResponseToken, IUserLogin } from "../../service/login/types";
import { registerUser } from "../../service/register";
import { IRegisterUser } from "../../service/register/type";
import { Dropdown } from "../Dropdown";
import { ModalLogin } from "../ModalLogin";
import { ModalRegister } from "../ModalRegister";
import { StatusModal } from "../ModalRegister/types";
import * as S_ from "./style";

export const Header = () => {
  const [statusModal, setStatusModal] = useState<StatusModal>(
    StatusModal["CLOSE"]
  );
  const [statusModalLogin, setStatusModalLogin] = useState<StatusModal>(
    StatusModal["CLOSE"]
  );
  const navigate = useNavigate();

  const { saveToken, token, userLogout } = usePersistToken();

  const _handleCloseModal = (key: keyof typeof StatusModal) =>
    setStatusModal(StatusModal[key]);

  const _handleRegisterUser = async (user: IRegisterUser) => {
    const response = await registerUser(user);
    return response;
  };

  const _handleLoginModal = async (user: IUserLogin) => {
    const resp = await loginUser(user);
    saveToken(resp.token ?? "");
    return resp as IResponseToken;
  };

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  const _handleLogout = () => userLogout();

  return (
    <S_.Header>
      <S_.Img src={logo} alt="Logo" title="logo" onClick={console.log} />
      <S_.Nav>
        <Dropdown
          options={[
            { id: 1, value: "PROGRAMAÇÃO" },
            { id: 2, value: "FRONT-END" },
            { id: 3, value: "INFRAESTRUTURA" },
            { id: 4, value: "BUSINESS" },
            { id: 5, value: "DESIGN & UX" },
          ]}
          label="CATEGORIAS"
          onClickItem={console.log}
          data-testid="dropdown-header"
        />
        <S_.Link to="favoritos">FAVORITOS</S_.Link>
        <S_.Link to="minha-estante">MINHA ESTANTE</S_.Link>
      </S_.Nav>

      <S_.Nav_Info>
        {token ? (
          <>
            <S_.Link to="#" onClick={_handleLogout}>
              <IoMdLogOut /> Sair
            </S_.Link>
            <S_.Link to="minha-conta">
              <IoMdPerson />
              Minha Conta
            </S_.Link>
          </>
        ) : (
          <>
            <S_.Link
              to="#"
              onClick={() => setStatusModalLogin(StatusModal["OPEN"])}
            >
              <IoMdLogIn /> Login
            </S_.Link>
            <S_.Link to="#" onClick={() => _handleCloseModal("OPEN")}>
              <IoMdPerson />
              Cadastrar
            </S_.Link>
          </>
        )}

        <ModalRegister
          status={statusModal}
          onClose={() => _handleCloseModal("CLOSE")}
          title="CADASTRO"
          onSubmit={_handleRegisterUser}
        />

        <ModalLogin
          status={statusModalLogin}
          onClose={() => setStatusModalLogin(StatusModal["CLOSE"])}
          title="Login"
          onSubmit={_handleLoginModal}
        />
      </S_.Nav_Info>
    </S_.Header>
  );
};
