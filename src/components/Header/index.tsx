import { useState } from "react";
import { IoMdCart, IoMdPerson } from "react-icons/io";
import logo from "../../assets/logo.svg";
import { Dropdown } from "../Dropdown";
import { Modal } from "../Modal";
import { StatusModal } from "../Modal/types";
import * as S_ from "./style";

export const Header = () => {
  const [statusModal, setStatusModal] = useState<StatusModal>(
    StatusModal["CLOSE"]
  );

  const _handleCloseModal = (key: keyof typeof StatusModal) =>
    setStatusModal(StatusModal[key]);

  return (
    <S_.Header>
      <S_.Img src={logo} alt="Logo" title="logo" onClick={console.log} />
      <S_.Nav >
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
        <S_.Link to="minha-scola">
          <IoMdCart /> Minha sacola
        </S_.Link>
        <S_.Link to="#" onClick={() => _handleCloseModal("OPEN")}>
          <IoMdPerson />
          Meu perfil
        </S_.Link>

        <Modal
          status={statusModal}
          onClose={() => _handleCloseModal("CLOSE")}
          title="CADASTRO"
          onSubmit={console.log}
        />
      </S_.Nav_Info>
    </S_.Header>
  );
};
