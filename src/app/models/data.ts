export interface data {
  title: string;
  children?: child[];
  expand?: boolean;
}

export interface child {
  kind: string;
  count: number;
  notes?: string[];
  expand?: boolean;
}
