import { ICompletedExpeditions, IExpedition, IPrisoner } from '../common/types';
import { fetchApi } from './fetch';

export const fetchPrisoners = async (): Promise<{
  status: 'error' | 'success';
  message: string;
  payload: IPrisoner[];
}> => {
  const res = await fetchApi('/api/v1/prisoners?order_by=xp&sort_order=desc');

  return await res.json();
};

export const fetchPrisoner = async (
  id: IPrisoner['id'],
): Promise<{
  status: 'error' | 'success';
  message: string;
  payload: IPrisoner;
}> => {
  const res = await fetchApi(`/api/v1/prisoners/${id}`);

  return await res.json();
};

export const fetchPrisonerCompletedExpeditions = async (
  id: IPrisoner['id'],
): Promise<{
  status: 'error' | 'success';
  message: string;
  payload: ICompletedExpeditions[];
}> => {
  const res = await fetchApi(`/api/v1/prisoners/${id}/completed-expeditions`);

  return await res.json();
};
