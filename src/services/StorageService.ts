
export enum StorageVariables {
  USERNAME = 'username',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}


export const getVariable = (type: StorageVariables) => {
  return localStorage.getItem(type);
}

export const removeVariable = (type: StorageVariables) => {
  localStorage.removeItem(type);
}
