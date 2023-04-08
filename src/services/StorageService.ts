type OnLoginData = {
  accessToken: string,
  refreshToken: string,
  username: string
}

enum StorageVariable {
  USERNAME = 'username',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}

export const storageOnLogin = (data: OnLoginData) => {
  localStorage.setItem(StorageVariable.USERNAME, data.username);
  localStorage.setItem(StorageVariable.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(StorageVariable.REFRESH_TOKEN, data.refreshToken);
};

export const getStorageVariable = (type: StorageVariable) => {
  return localStorage.getItem(type);
}
