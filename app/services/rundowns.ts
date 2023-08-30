import { AxiosResponse } from 'axios';

import { IRundown } from '../common/types';
import { instance } from './axios';

export const fetchRundowns = (): Promise<
  AxiosResponse<{
    status: 'error' | 'success';
    message: string;
    payload: IRundown[];
  }>
> => instance({ url: '/api/v1/rundowns' });
