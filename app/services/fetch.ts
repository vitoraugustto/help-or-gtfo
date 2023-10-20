export const fetchApi = async (url: string, options?: RequestInit) => {
  const opt: RequestInit = {
    ...options,
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${url}`, opt);
};
