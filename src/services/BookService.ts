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

export type FetchBookByIdResponse = {
  id: number,
  author: string,
  launchDate: Date,
  price: number,
  title: string,
  _links: {
    self: {
      href: string
    }
  }
}

export type BookDetail = {
  id: string,
  title: string,
  author: string,
  launchDate: string,
  price: string
}

export type EditBookRequest = {id: number} & CreateBookRequest;

type Pageable = {
  page?: number;
  limit?: number;
  direction?: 'asc' | 'desc';
}

export const createBook = async (request: CreateBookRequest) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);
  await apiClient.post('/api/book/v1', request, makeHeader(accessToken!));
};


export const fetchBooks = async ({ page = 0, limit = 4, direction = 'asc' }: Pageable = {}): Promise<BookItem[]> => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  const { data } = await apiClient.get<FetchBookResponse>(`/api/book/v1?page=${page}&limit=${limit}&direction=${direction}`, makeHeader(accessToken));
  return data._embedded.bookVOes;
};


export const deleteBookById = async (bookId: number) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  await apiClient.delete(`/api/book/v1/${bookId}`, makeHeader(accessToken));
};

export const fetchBookById = async (bookId: number) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  const { data } = await apiClient.get<FetchBookByIdResponse>(`/api/book/v1/${bookId}`, makeHeader(accessToken));
  return {
    ...data,
    id: data.id.toString(),
    price: data.price.toString(),
    launchDate: data.launchDate.toString().split('T')[0],
  } as BookDetail;
};

export const editBook = async (request: EditBookRequest) => {
  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN)!;
  await apiClient.put(`/api/book/v1`, request, makeHeader(accessToken));
};
