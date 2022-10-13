import { act, render, screen } from "@testing-library/react";
import { expect, it, describe, vi, beforeEach } from "vitest";
import { IOrder } from "../../../../service/order/types";
import { GetOrder } from "../../../../service/order";
import useEvent from "@testing-library/user-event";
import { Order } from "..";

const GetOrderMock = vi.fn();

const mockDataApi = [
  {
    id: 89019041,
    date: "2022-05-26",
    deliveryDate: "2022-05-26",
    total: 100,
  },
];

vi.mock("../../../../service/order", () => ({
  GetOrder: (): Promise<IOrder[]> => GetOrderMock(),
}));

const mockedUsedNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Order />", () => {
  beforeEach(() => {
    GetOrderMock.mockResolvedValue(mockDataApi);
  });
  it("Shoulb be render list Order", async () => {
    await act(async () => {
      render(<Order />);
    });

    const listOrder = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(listOrder).toBeInTheDocument();
    expect(listItems[0]).toBeInTheDocument();

    expect(GetOrderMock).toBeCalledTimes(1);
  });

  it("Should be change page when happened click in datails", async () => {
    await act(async () => {
      render(<Order />);
    });
    const buttons = screen.getByRole("button", { name: "detalhes" });
    await useEvent.click(buttons);
    expect(buttons).toBeInTheDocument();

    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith("pedido");
  });
});
