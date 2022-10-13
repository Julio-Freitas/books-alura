export interface IUserLogin {
  email: string;
  password: string;
}

export type ErrorAPi = {
  message?: string;
  status?: number;
};

export type SucessAPI = {
  access_token: string;
};

export interface IResponse {
  data?: SucessAPI;
  response?: { data: ErrorAPi };
}

export interface IResponseToken {
    token: string,
    status: boolean
}
