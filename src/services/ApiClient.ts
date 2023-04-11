import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const makeHeader = (accessToken: string) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
