import { getVariable, StorageVariables } from './StorageService';
import { apiClient } from './ApiClient';

type CreateBookRequest = {
  title: string,
  author: string,
  launchDate: Date,
  price: number,
}

export const createBook = async (request: CreateBookRequest) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);
  await apiClient.post('/api/book/v1', request, { headers: { Authorization: `Bearer ${accessToken}` } });
};
