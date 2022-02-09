import { DataStatus } from '../typings';

const baseLoadingStatus: DataStatus = {
  type: 'loading',
  status: 'Загрузка...',
  message: 'Идёт загрузка данных',
};

const baseErrorStatus: DataStatus = {
  type: 'error',
  status: 'Данные не получены',
  message: 'Попробуйте перезапустить сервис или обратитесь к авторам сервиса',
};

const baseNoDataStatus: DataStatus = {
  type: 'calculating',
  status: 'Расчёт',
  message: 'Нет данных по оптимизационному сценарию',
};

export { baseLoadingStatus, baseErrorStatus, baseNoDataStatus };
