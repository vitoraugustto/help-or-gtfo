import axios, { AxiosInstance } from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
