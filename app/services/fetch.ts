import { BACKEND_BASE_URL } from '../common/constants';

const headers = { 'Content-Type': 'application/json' };

export const fetchApi = async (url: string, options?: RequestInit) => {
  const opt: RequestInit = { ...options, headers };

  return await fetch(`${BACKEND_BASE_URL}${url}`, opt);
};
