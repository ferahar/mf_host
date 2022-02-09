import { SnackBarItemStatus } from '@consta/uikit/SnackBar';
import { storeMessages } from '../../services/common';

function getStatus(): SnackBarItemStatus {
  const statusList: SnackBarItemStatus[] = [
    'success',
    'warning',
    'alert',
    'system',
    'normal',
  ];
  const index = Math.floor(Math.random() * 10 / statusList.length);
  return statusList[index];
}

const useGenerateMessage = () => {
  const { setMessage } = storeMessages;

  const generate = () => {
    const status = getStatus();
    const message = `Сообщение о каком-то событии - ${status}`;
    setMessage(message, status);
  };

  return {
    generate,
  };

};



export default useGenerateMessage;
