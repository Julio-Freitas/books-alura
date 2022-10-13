import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ModalRegister } from "..";
import { IModal, StatusModal } from "../types";
import { IRegisterUser } from "../../../service/register/type";
import { registerUser } from "../../../service/register";

vi.mock("../../../service/register", () => ({
  registerUser: async <T,>(data: T) => true,
}));

const mockOnSubmitSucess = vi.fn(async (data: IRegisterUser) => {
  return registerUser(data);
});
const propsModal: IModal<IRegisterUser> = {
  onClose: vi.fn(),
  status: StatusModal.CLOSE,
  onSubmit: mockOnSubmitSucess,
  title: "Teste Modal",
};

describe("<ModalRegister />", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });
  it("When the modal is closed", () => {
    const { container } = render(<ModalRegister {...propsModal} />);
    expect(screen.queryByText(/Teste Modal/)).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("When the modal is Open", () => {
    render(<ModalRegister {...propsModal} status={StatusModal.OPEN} />);
    expect(screen.queryByText(/Teste Modal/)).toBeInTheDocument();
  });

  it("When the user click in submit with fiedls empty", async () => {
    render(<ModalRegister {...propsModal} status={StatusModal.OPEN} />);
    const submitButton = screen.getByRole("button", { name: /Cadastrar/i });

    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    expect(propsModal.onSubmit).toBeCalledTimes(0);
    expect(
      screen.getByText("Verique os campo nome, email e senha.")
    ).toBeInTheDocument();
  });

  it("Should be show text error if password is different of confirm password value", async () => {
    render(<ModalRegister {...propsModal} status={StatusModal.OPEN} />);
    const passord = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirmPassword");
    const elementError = screen.getByTestId("erro-password");

    await userEvent.type(passord, "A");
    await userEvent.type(confirmPassword, "B");

    expect(passord).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();

    expect(elementError.textContent).toStrictEqual(
      "Senha ainda são diferentes"
    );
  });

  it("Should  trigger function onSubmit if the values name, email, password and confirm password had value", async () => {
    render(<ModalRegister {...propsModal} status={StatusModal.OPEN} />);

    const dataMock = {
      address: "",
      addressLocale: "",
      confirmPassword: "1234",
      email: "email@teste.com",
      name: "Silva Teste",
      password: "1234",
      zip: "",
    };

    const name = screen.getByPlaceholderText("Seu nome");
    const email = screen.getByPlaceholderText("seuemail@email.com");
    const passord = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirmPassword");
    const elementError = screen.getByTestId("erro-password");
    const submitButton = screen.getByRole("button", { name: /Cadastrar/i });

    await userEvent.type(name, dataMock.name);
    await userEvent.type(email, dataMock.email);

    await userEvent.type(passord, dataMock.password);
    await userEvent.type(confirmPassword, dataMock.confirmPassword);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();

    expect(passord).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();

    expect(name).toHaveValue("Silva Teste");
    expect(email).toHaveValue("email@teste.com");
    expect(elementError.textContent).toBe("");

    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);
    expect(mockOnSubmitSucess).toBeCalledTimes(1);
    expect(mockOnSubmitSucess).toHaveBeenCalledWith(dataMock);

    await waitFor(() => expect(propsModal.onClose).toBeCalledTimes(1));
  });
});
