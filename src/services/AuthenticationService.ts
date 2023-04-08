import { apiClient } from './ApiClient';

export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  accessToken: string,
  refreshToken: string
}

export const doLogin = async (request: LoginRequest): Promise<LoginResponse> => {

  let { data } = await apiClient.post<LoginResponse>('/auth/signin', request);

  // TODO: handle response status
  // TODO: implement Either return https://dev.to/milos192/error-handling-with-the-either-type-2b63

  return data;
};

