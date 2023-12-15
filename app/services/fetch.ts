import { BACKEND_BASE_URL } from '../common/constants';

export const fetchApi = async (url: string, options?: RequestInit) => {
  const opt: RequestInit = {
    ...options,
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetch(`${BACKEND_BASE_URL}${url}`, opt);
};
