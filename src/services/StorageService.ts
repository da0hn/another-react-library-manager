type OnLoginData = {
  accessToken: string,
  refreshToken: string,
  username: string
}

export enum StorageVariables {
  USERNAME = 'username',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}

export const storageOnLogin = (data: OnLoginData) => {
  localStorage.setItem(StorageVariables.USERNAME, data.username);
  localStorage.setItem(StorageVariables.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(StorageVariables.REFRESH_TOKEN, data.refreshToken);
};

export const getVariable = (type: StorageVariables) => {
  return localStorage.getItem(type);
}
