export interface IRundown {
  title: string;
  id: number;
  number: number;
  release_date: string;
  expeditions: IExpedition[];
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
