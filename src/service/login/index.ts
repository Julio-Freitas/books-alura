import axios from "axios";
import { API } from "../config";
import { IResponse, IUserLogin } from "./types";


const getUser = (user: IUserLogin): Promise<IResponse> =>
  API.post("/auth/login", user);

export const loginUser = async (user: IUserLogin) => {
  try {
    const response = await getUser(user);
    alert("Logado com sucesso..");
    return {
      token: response.data?.access_token,
      status: true
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else alert("Algo de errado aconteceu!");

    return {
      token: '',
      status: false
    };
  }
};
