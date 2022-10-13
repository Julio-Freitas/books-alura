import { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { usePersistToken } from "../../hooks/useAuth";
import * as S_ from "./styles";
type ItemAccountType = {
  id: string;
  value: string;
};

export const MyAccount = () => {
  const [itemAccountSelected, setItemAccountSelected] =
    useState<ItemAccountType>({ id: "order", value: "Pedidos" });
  const { token } = usePersistToken();

  const navigator = useNavigate();

  const links: ItemAccountType[] = [
    {
      id: "pedidos",
      value: "Pedidos",
    },
    {
      id: "trocas",
      value: "Trocas",
    },
    {
      id: "cupons",
      value: "Cupons",
    },
    {
      id: "seus-dados",
      value: "Seus dados",
    },
  ];
  useEffect(() => {
    const defaultTab = !location.pathname.includes("/pedidos") && "pedidos";
    if (defaultTab) navigator(defaultTab);
  }, [token]);

  if (!token) return <Navigate to="/" replace={true} />;

  return (
    <S_.MyAccountContainer>
      <S_.Aside>
        <S_.Ul>
          {links.map((link, index) => (
            <S_.Li
              key={link.id}
              selected={
                itemAccountSelected?.id
                  ? link.id === itemAccountSelected?.id
                  : index === 0
              }
              onClick={() => setItemAccountSelected(link)}
            >
              <Link to={link.id.toLocaleLowerCase()}> {link.value}</Link>
            </S_.Li>
          ))}
        </S_.Ul>
      </S_.Aside>

      <S_.Content>
        <h4>{itemAccountSelected?.value}</h4>
        <Outlet />
      </S_.Content>
    </S_.MyAccountContainer>
  );
};
