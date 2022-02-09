import { PayloadResponse } from '../typings';
import { SnackBarItemStatus } from '@consta/uikit/SnackBar';
// import { PayloadAction } from '@reduxjs/toolkit';

type Props = {
  setMessage: (message: string, status: SnackBarItemStatus) => void,
  isResponse: boolean,
  // todo Eit result
  // result: PayloadAction<PayloadResponse | unknown>,
  result: { payload: unknown },
  callback?: (props?: unknown) => void,
  callbackProps?: unknown,
};


const showMessageStatus = (props: Props) => {
  const { setMessage, isResponse, result, callback, callbackProps } = props;

  if (isResponse) {
    const message = (result.payload as PayloadResponse).message;
    if (message) {
      setMessage(message, 'success');
    } else {
      setMessage('Запрос успешно отправлен', 'success');
    }
    if (callback && !callbackProps) callback();
    if (callback && callbackProps) callback(callbackProps);
  } else if (result.payload) {
    const message = (result.payload as PayloadResponse).message;
    if (message) {
      setMessage(message, 'warning');
    } else {
      setMessage('Неизвестная ошибка! Обратитесть к админу проекта.', 'warning');
    }
  } else {
    setMessage('Ошибка! Обратитесть к админу проекта.', 'alert');
  }
};

export {
  showMessageStatus,
};
