import { SeriesOptionsType } from 'highcharts';

export type Nullable<T> = T | null;
export type ConfigType = { [key: string]: string };
export type PreparedCategorizedChartData = {
  preparedData: SeriesOptionsType[];
  categories: string[];
};
export type DefaultRecord<T> = Record<string, T>;
export enum EnumCondition {
  OIL = 'oil',
  LIQUID = 'liquid',
  GAS = 'gas',
}
export type ConditionItem = {
  label: string
  id: EnumCondition
};
export enum EnumDateMode {
  DAILY = 'daily',
  MONTHLY = 'monthly',
}
export type DateModeItem = {
  label: string,
  id: EnumDateMode,
};
export type DateFilterItem = [Date?, Date?];
export type ResponseStatus = {
  statusCode: number;
  statusMessage?: string;
};
export type DataStatus = {
  type: 'loading' | 'error' | 'calculating';
  status: string;
  message: string;
} | null;

export type PayloadResponse = {
  code?: number;
  message?: string;
};
