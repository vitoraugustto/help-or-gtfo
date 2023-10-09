import { IExpedition, IRundown } from '../common/types';
import { fetchApi } from './fetch';

export const fetchRundowns = async (): Promise<{
  status: 'error' | 'success';
  message: string;
  payload: IRundown[];
}> => {
  const res = await fetchApi('/api/v1/rundowns');

  return await res.json();
};

export const fetchExpedition = async (
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
): Promise<{
  status: 'error' | 'success';
  message: string;
  payload: IExpedition;
}> => {
  const res = await fetchApi(
    `/api/v1/rundowns/${rundownId}/expeditions/${expeditionId}`,
  );

  return await res.json();
};
