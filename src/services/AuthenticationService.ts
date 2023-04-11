import { apiClient } from './ApiClient';
import { removeVariable, StorageVariables } from './StorageService';

export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  accessToken: string,
  refreshToken: string
}

type OnLoginData = {
  accessToken: string,
  refreshToken: string,
  username: string
}

export const persistUserData = (data: OnLoginData) => {
  localStorage.setItem(StorageVariables.USERNAME, data.username);
  localStorage.setItem(StorageVariables.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(StorageVariables.REFRESH_TOKEN, data.refreshToken);
};


export const doLogin = async (request: LoginRequest): Promise<LoginResponse> => {

  let { data } = await apiClient.post<LoginResponse>('/auth/signin', request);

  // TODO: handle response status
  // TODO: implement Either return https://dev.to/milos192/error-handling-with-the-either-type-2b63

  return data;
};

