import { DataStatus, ResponseStatus } from '../typings';
import { baseErrorStatus } from '../config/data-statuses';

const baseErrorMessage = 'Попробуйте перезапустить сервис или обратитесь к авторам сервиса';
const baseCalculatingMessage = 'Нет данных по оптимизационному сценарию';

export default function getDataStatusObj(responseStatus: ResponseStatus): DataStatus {
  switch (responseStatus.statusCode) {
    case 201:
      return {
        type: 'calculating',
        status: 'Расчёт',
        message: responseStatus.statusMessage || 'Задача поставлена на расчет',
      };
    case 204:
      return {
        type: 'calculating',
        status: 'Расчёт',
        message: responseStatus.statusMessage || baseCalculatingMessage,
      };
    case 400:
      return {
        type: 'error',
        status: 'Ошибка',
        message: responseStatus.statusMessage || baseErrorMessage,
      };
    case 403:
      return {
        type: 'error',
        status: 'Ошибка',
        message: responseStatus.statusMessage || 'Система уже в статусе "Актуализация"',
      };
    default:
      return baseErrorStatus;
  }
}
