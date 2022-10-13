import { API } from "../config";
import { IRegisterUser } from "./type";

export const registerUser = async (user: IRegisterUser): Promise<boolean>  => {
  try {
    await API.post("/auth/register", user);
    alert("Usupario Cadastrado com sucesso");
    return true;
  } catch (error) {
    alert("OPS! Alguma coisa deu errado!");
    return false;
  }
};
