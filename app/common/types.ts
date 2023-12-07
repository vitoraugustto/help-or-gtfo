export interface IRundown {
  title: string;
  id: number;
  number: number;
  release_date: string;
  expeditions: IExpedition[];
}

export interface ICompletedExpeditions {
  expedition: IExpedition;
  id: number;
  cleared_main_sector: boolean;
  cleared_secondary_sector: boolean;
  cleared_overload_sector: boolean;
  prisoner_efficiency: boolean;
  completed_at: string;
}

export interface IExpedition {
  id: number;
  display_name: string;
  title?: string;
  tier?: 'A' | 'B' | 'C' | 'D' | 'E';
  difficulty?: '1' | '2' | '3' | '4' | 'X';
  main_sector?: boolean;
  secondary_sector?: boolean;
  overload_sector?: boolean;
  xp?: number;
  finishers: IPrisoner[];
}

export interface IPrisoner {
  id: number;
  username: string;
  email?: string;
  level: number;
  xp: number;
  completed_expeditions?: IExpedition[];
}

export type ResponseStatus = 'error' | 'success';

export interface IPaginationResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}

export interface IBackendResponse<T> {
  status: ResponseStatus;
  message: string;
  payload: T;
}
