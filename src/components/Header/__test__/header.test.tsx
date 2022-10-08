import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, afterEach, vi } from "vitest";
import { Header } from "..";
import userEvent from "@testing-library/user-event";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe("<Home>", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("Should be Home Correctly", async () => {
    const { container } = renderWithRouter(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.only("Should be click in links", async () => {
    renderWithRouter(<Header />);
    const myBag = screen.getByRole("link", { name: "Minha sacola" });
    await userEvent.click(myBag);
    expect(window.location.pathname).toStrictEqual("/minha-scola");

    const myEstante = screen.getByRole("link", { name: "MINHA ESTANTE" });
    await userEvent.click(myEstante);
    expect(window.location.pathname).toStrictEqual("/minha-estante");

    const faivorites = screen.getByRole("link", { name: "FAVORITOS" });
    await userEvent.click(faivorites);
    expect(window.location.pathname).toStrictEqual("/favoritos");
  });

  it("Should be render modal register", async () => {
    renderWithRouter(<Header />);
    const myProfiler = screen.getByRole("link", { name: "meu perfil" });
    const modalRegister = screen.findByTestId("form-register");
    await userEvent.click(myProfiler);

    await waitFor(() => {
      expect(modalRegister).toBeInTheDocument();
    });
  });
});
