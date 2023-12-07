import {
  IBackendResponse,
  ICompletedExpeditions,
  IExpedition,
  IPaginationResponse,
  IPrisoner,
  ResponseStatus,
} from '../common/types';
import { fetchApi } from './fetch';

export const fetchPrisoners = async (): Promise<
  IBackendResponse<IPrisoner[]>
> => {
  const res = await fetchApi('/api/v1/prisoners?order_by=xp&sort_order=desc');

  return await res.json();
};

export const fetchPrisoner = async (
  id: IPrisoner['id'],
): Promise<IBackendResponse<IPrisoner>> => {
  const res = await fetchApi(`/api/v1/prisoners/${id}`);

  return await res.json();
};

export const fetchCompletedExpeditions = async (
  id: IPrisoner['id'],
  page: number = 1,
): Promise<IBackendResponse<PaginationCompletedExpeditions>> => {
  const res = await fetchApi(
    `/api/v1/prisoners/${id}/completed-expeditions?page=${page}`,
  );

  return await res.json();
};

type PaginationCompletedExpeditions =
  IPaginationResponse<ICompletedExpeditions>;
