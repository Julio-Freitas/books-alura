import axios from "axios";
import { API } from "../config";
import { IOrder } from "./types";

export const GetOrder = async () => {
  let data: IOrder[] = [];
  try {
    const response = await API.get<IOrder[]>("/order");
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.message);
    else alert("Algo de errado aconteceu!");
    data = [];
  } finally {
    return data;
  }
};
