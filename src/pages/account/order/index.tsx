import { DsButton } from "books-ds";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetOrder } from "../../../service/order";
import * as S_ from "../styles";

type OrderTypes = {
  id: number;
  date: string;
  total: number;
  deliveryDate: string;
};

export const Order = () => {
  const [order, setOrder] = useState<OrderTypes[]>();
  const navigator = useNavigate();

  useEffect(() => {
    GetOrder().then(setOrder);
  }, []);

  const _handleClickOrder = (item: OrderTypes) => {
    navigator("pedido");
  };

  return (
    <S_.Ul role="list">
      {order?.map((item) => (
        <S_.LiOrder key={item.id} role="listitem">
          <p>
            <span>Pedido:</span>
            {item.id}
          </p>
          <p>
            <span>Data do pedido: </span>
            {new Date(item.date).toLocaleDateString()}
          </p>
          <p>
            <span>Valor</span>{" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(item.total)}
          </p>
          <p>
            <span>Entrega realizada em</span>
            {new Date(item.deliveryDate).toLocaleDateString()}
          </p>
          <DsButton onClick={() => _handleClickOrder(item)} text="detalhes" />
        </S_.LiOrder>
      ))}
    </S_.Ul>
  );
};
