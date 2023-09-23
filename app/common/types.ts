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
  xp?: number;
  finishers?: [];
}
