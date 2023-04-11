import { getVariable, StorageVariables } from './StorageService';
import { apiClient, makeHeader } from './ApiClient';

export type CreateBookRequest = {
  title: string,
  author: string,
  launchDate: Date,
  price: number,
}

export type BookItem = {
  id: number,
  title: string,
  author: string,
  launchDate: Date,
  price: number
}

export type FetchBookResponse = {
  _embedded: {
    bookVOes: BookItem[]
  }
  _links: {
    self: {
      href: string
    }
  }
}


export const createBook = async (request: CreateBookRequest) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);
  await apiClient.post('/api/book/v1', request, makeHeader(accessToken!));
};

export const fetchBook = async (): Promise<BookItem[]> => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  const { data } = await apiClient.get<FetchBookResponse>('/api/book/v1', makeHeader(accessToken));
  return data._embedded.bookVOes;
};

export const deleteBookById = async (bookId: number) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  await apiClient.delete(`/api/book/v1/${bookId}`, makeHeader(accessToken));
};
