import { AxiosResponse } from 'axios';

import { IExpedition, IRundown } from '../common/types';
import { instance } from './axios';

export const fetchRundowns = (): Promise<
  AxiosResponse<{
    status: 'error' | 'success';
    message: string;
    payload: IRundown[];
  }>
> => instance({ url: '/api/v1/rundowns' });

export const fetchExpeditions = (): Promise<
  AxiosResponse<{
    status: 'error' | 'success';
    message: string;
    payload: IExpedition[];
  }>
> => instance({ url: '/api/v1/expediotions' });
