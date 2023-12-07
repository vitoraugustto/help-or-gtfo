import { IBackendResponse, IExpedition, IRundown } from '../common/types';
import { fetchApi } from './fetch';

export const fetchRundowns = async (): Promise<
  IBackendResponse<IRundown[]>
> => {
  const res = await fetchApi('/api/v1/rundowns');

  return await res.json();
};

export const fetchExpedition = async (
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
): Promise<IBackendResponse<IExpedition>> => {
  const res = await fetchApi(
    `/api/v1/rundowns/${rundownId}/expeditions/${expeditionId}`,
  );

  return await res.json();
};

export const fetchExpeditionFinishers = async (
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
): Promise<IBackendResponse<IExpedition['finishers']>> => {
  const res = await fetchApi(
    `/api/v1/rundowns/${rundownId}/expeditions/${expeditionId}/finishers`,
  );

  return await res.json();
};
